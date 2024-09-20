import {AsyncPipe} from '@angular/common';
import {Component, computed, ElementRef, Input, signal, ViewChild} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {recipesData} from 'src/app/generated/recipes-data';
import {DropdownCommand, DropdownComponent} from 'src/app/shared/component/dropdown/dropdown.component';
import {itemNames} from 'src/app/shared/entities/item-names';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {Recipe} from 'src/app/shared/entities/recipe';
import {RecipeDataDto} from 'src/app/shared/entities/recipe-data-item-dto';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {ItemSelectorService} from 'src/app/shared/service/item-selector-service';
import {SearchService} from 'src/app/shared/service/search-service';
import {addItemPackage, recipeSelected, removeItemPackage, updateItemPackage} from 'src/app/shared/store/planner/planner.actions';
import {InputControlDirective} from '../../directive/input-control.directive';
import {DropdownComponent as DropdownComponent_1} from '../dropdown/dropdown.component';
import {InputComponent} from '../input/input.component';
import {PackageImagesComponent} from '../package-images/package-images.component';

const recipesDataSorted = recipesData
    .slice()
    .filter((item) => !/FICSMAS/.test(item.name))
    .sort((a, b) => {
        const getPriority = (item: RecipeDataDto) => {
            if (item?.inputs?.some((input) => /SAM/.test(input?.itemName))) {
                return 2;
            }
            if (/Alternate/.test(item.name)) {
                return 1;
            }
            return 0;
        };

        const priorityA = getPriority(a);
        const priorityB = getPriority(b);

        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }

        const amountA = a?.inputs?.reduce((sum, input) => sum + input.amount, 0) || 0;
        const amountB = b?.inputs?.reduce((sum, input) => sum + input.amount, 0) || 0;

        return amountA - amountB;
    });

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    standalone: true,
    imports: [DropdownComponent_1, InputComponent, FormsModule, InputControlDirective, PackageImagesComponent, AsyncPipe],
})
export class ItemComponent {
    @Input() recipe!: Recipe;
    @Input() target!: RecipeTarget;
    @Input() itemPackage?: ItemPackage;
    @ViewChild(DropdownComponent) dropdown!: DropdownComponent;
    @ViewChild('element') input!: ElementRef<HTMLInputElement>;

    labels: Record<RecipeTarget, string> = {inputs: 'Input', outputs: 'Output or recipe'};
    selected = signal<any>(undefined);
    needle = signal('');
    suggestions = computed(() => {
        const items = this.searchService.search(this.needle() || this.itemPackage?.itemName, itemNames, {
            limit: 5,
        });
        const recipes = this.searchService.search(this.needle() || this.itemPackage?.itemName, recipesDataSorted, {
            matchesFuzzy: (dto) => this.stringifyRecipe(dto),
            matchesPerfect: (dto) => this.itemNamesAsArray(dto),
            limit: 15,
        });

        return {items, recipes, all: [...items, ...recipes]};
    });
    suggestions$ = toObservable(this.suggestions);

    constructor(
        public store: Store,
        private searchService: SearchService,
        private itemSelectorService: ItemSelectorService,
        private elementRef: ElementRef,
    ) {}

    itemSelected(itemName: string | RecipeDataDto, itemPackage?: ItemPackage): void {
        this.needle.set(typeof itemName === 'string' ? itemName : (itemPackage?.itemName ?? ''));
        this.selected.set(undefined);

        if (typeof itemName !== 'string') {
            this.store.dispatch(recipeSelected({relation: this.recipe.unwrap(), recipe: itemName}));
            return;
        }

        if (itemPackage) {
            this.store.dispatch(updateItemPackage({relation: itemPackage.unwrap(), itemPackage: {itemName}}));
            return;
        }

        this.store.dispatch(
            addItemPackage({
                relation: this.recipe.unwrap(),
                target: this.target,
                itemPackage: {itemName},
            }),
        );
    }

    onKeyboard(command: DropdownCommand): void {
        if (command === 'submit') {
            this.itemSelected(this.selected(), this.itemPackage);
            this.dropdown.close();
            this.input.nativeElement.blur();
            return;
        }

        const next = this.itemSelectorService.select(command, this.selected(), this.suggestions().all);
        this.selected.set(next);
        setTimeout(() => {
            this.elementRef.nativeElement.querySelector('.dropdown-item.active')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }, 1);
    }

    remove(itemPackage: ItemPackage): void {
        this.store.dispatch(removeItemPackage({relation: itemPackage.unwrap()}));
    }

    private stringifyRecipe(object?: RecipeDataDto): string {
        return `${object?.name ?? ''} ` + (object?.[this.target]?.map((output) => output.itemName).join(' ') ?? 'unknown');
    }

    private itemNamesAsArray(object?: RecipeDataDto): string[] {
        return object?.[this.target]?.map((output) => output.itemName) ?? [];
    }
}
