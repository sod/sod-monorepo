import * as fs from 'node:fs';
import {resolve} from 'node:path';
import {parseCollection} from 'satisfactory-docs-parser/dist/utilities';

function writeResult(recipesData: any) {
    const disclaimer = '// this file is generated via bin/process-docs';
    const exportedData = 'export const recipesData = ' + JSON.stringify(recipesData, null, 4);

    fs.writeFileSync(pathFromRoot('src/app/generated/recipes-data.ts'), [disclaimer, exportedData].join('\n\n'), {encoding: 'utf-8'});
}

type SerializedObject = `((${string}))`;
type SerializedFloat = `${number}.${number}`;

interface BuildableRaw {
    ClassName?: string;
    mProducedIn?: SerializedObject;
    mIngredients?: SerializedObject;
    mDisplayName?: string;
    mProduct?: SerializedObject;
    mManufacturingMenuPriority: SerializedFloat;
    mManufactoringDuration: SerializedFloat;
    mManualManufacturingMultiplier: SerializedFloat;
}

interface ItemRaw {
    ClassName: string; //'Desc_AlienProtein_C';
    mDisplayName: string; //'Alien Protein';
    mDescription: string; // 'Ground-up Alien Remains in a neat little package.\r\n' +'Used for medical purposes and to research alien organisms.',
    mAbbreviatedDisplayName: string; //'';
    mStackSize: string; //'SS_MEDIUM';
    mCanBeDiscarded: string; //'True';
    mRememberPickUp: string; //'False';
    mEnergyValue: string; //'0.000000';
    mRadioactiveDecay: string; //'0.000000';
    mForm: string; //'RF_SOLID';
    mGasType: string; //'GT_NORMAL';
    mSmallIcon: string; //'Texture2D /Game/FactoryGame/Resource/Parts/AlienProtein/UI/IconDesc_AlienProtein_256.IconDesc_AlienProtein_256';
    mPersistentBigIcon: string; //'Texture2D /Game/FactoryGame/Resource/Parts/AlienProtein/UI/IconDesc_AlienProtein_256.IconDesc_AlienProtein_256';
    mCrosshairMaterial: string; //'None';
    mDescriptorStatBars: string; //'';
    mIsAlienItem: string; //'False';
    mSubCategories: string; //'';
    mMenuPriority: string; //'0.000000';
    mFluidColor: string; //'(B=255,G=255,R=255,A=0)';
    mGasColor: string; //'(B=255,G=255,R=255,A=0)';
    mCompatibleItemDescriptors: string; //'';
    mClassToScanFor: string; //'None';
    mScannableType: string; //'RTWOT_Default';
    mShouldOverrideScannerDisplayText: string; //'False';
    mScannerDisplayText: string; //'';
    mScannerLightColor: string; //'(B=0,G=0,R=0,A=0)';
    mNeedsPickUpMarker: string; //'False';
    mResourceSinkPoints: string; //'0';
}

interface DocsJson {
    NativeClass: string;
    Classes: (BuildableRaw | ItemRaw)[];
}

const pathFromRoot = (path: string): string => resolve(__dirname, '../..', path);
const file = fs.readFileSync(pathFromRoot('resources/update1_0/Docs.json'), {encoding: 'utf-8'});
const docs: DocsJson[] = JSON.parse(file.trim());

function findClassInString(name: string, haystack: string) {
    return new RegExp(`\.${name}'$`).test(haystack);
}

function getByNativeClassRaw(name: string): DocsJson['Classes'] {
    const found = docs.filter((doc) => findClassInString(name, doc.NativeClass));

    console.assert(
        found.length === 1,
        `Expected 1 match for ${name}, got ${found.length}: ${JSON.stringify(found.map((x) => x.NativeClass))}`,
    );

    return found[0]?.Classes ?? [];
}

function getBuildablesRaw(): BuildableRaw[] {
    const producerNoMatch = new Set();
    const buildable = /\/Buildable\/Factory\/([^/]+)\/Build_/;
    const buildables: DocsJson['Classes'] = [];

    for (let doc of docs) {
        for (let dto of doc.Classes) {
            if ('mProducedIn' in dto) {
                const match = buildable.exec(dto.mProducedIn!);
                const building = match?.[1];
                if (building) {
                    buildables.push(dto);
                }
            }
        }
    }

    if (!buildables.length) {
        console.log(`getBuildablesRaw() didn't match anything: ${producerNoMatch}`);
    }

    return buildables;
}

function mapBuildables(items: Map<string, ItemRaw>, buildablesRaw: BuildableRaw[]) {
    return buildablesRaw.map((dto) => {
        const inputs: {ItemClass: string; Amount: string}[] = parseCollection(dto.mIngredients ?? '');
        const outputs: {ItemClass: string; Amount: string}[] = parseCollection(dto.mProduct ?? '');
        const producedIn: string[] = parseCollection(dto.mProducedIn ?? '');
        const craftTime = +dto.mManufactoringDuration;
        const normalizeAmount = (quantity: number) => +((quantity * 60) / craftTime).toFixed(2);

        return {
            name: dto.mDisplayName,
            producedIn: producedIn.map((factory) => getItem(items, factory).mDisplayName).find((name) => !/unknown/.test(name)),
            inputs:
                inputs?.map((input) => ({
                    itemName: getItem(items, input.ItemClass).mDisplayName,
                    amount: normalizeAmount(+input.Amount),
                })) ?? [],
            outputs:
                outputs?.map((output) => ({
                    itemName: getItem(items, output.ItemClass).mDisplayName,
                    amount: normalizeAmount(+output.Amount),
                })) ?? [],
        };
    });
}

function getItem(items: Map<string, ItemRaw>, ItemClass: string): Pick<ItemRaw, 'mDisplayName'> {
    const name = ItemClass.split('.')
        .pop()
        ?.replace(/['"].*$/, '');
    return items.get(name!) ?? {mDisplayName: `unknown<name:${name},dto:${ItemClass}>`};
}

function mapItems(itemsRaw: ItemRaw[]): Map<string, ItemRaw> {
    return new Map(itemsRaw.map((dto) => [dto.ClassName, dto]));
}

const buildablesRaw = getBuildablesRaw();
const items = mapItems(docs.flatMap((doc) => doc.Classes) as any);
const buildables = mapBuildables(items, buildablesRaw);

// console.log(itemsRaw[0]);
// console.log(buildablesRaw[0]);
// console.log(buildables[0]);

writeResult(buildables);

export {};
