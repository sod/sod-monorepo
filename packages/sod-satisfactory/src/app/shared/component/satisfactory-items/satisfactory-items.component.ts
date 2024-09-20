import {AsyncPipe, NgClass} from '@angular/common';
import {Component, Input} from '@angular/core';
import {PushPipe} from '@ngrx/component';
import {Store} from '@ngrx/store';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {ProductionInput, ProductionInputs} from 'src/app/shared/pipe/resolve-production.pipe';
import {GlobalState} from 'src/app/shared/store/global-state';
import {addProductionWithOutputNameClicked, editProductionClicked} from 'src/app/shared/store/planner/planner.actions';
import {AnimatePipe} from '../../../animate/pipe/animate.pipe';
import {SatisfactoryItemComponent} from '../satisfactory-item/satisfactory-item.component';

@Component({
    selector: 'app-satisfactory-items',
    templateUrl: './satisfactory-items.component.html',
    styleUrls: ['./satisfactory-items.component.scss'],
    standalone: true,
    imports: [NgClass, SatisfactoryItemComponent, PushPipe, AnimatePipe, AsyncPipe],
})
export class SatisfactoryItemsComponent {
    @Input() values!: ItemPackage[];
    @Input() productionInputs?: ProductionInputs;
    @Input({required: true}) target!: RecipeTarget;

    constructor(private store: Store<GlobalState>) {}

    inputClicked(itemPackage: ItemPackage, productionInput?: ProductionInput): void {
        if (productionInput?.outputProductionIndex !== undefined) {
            this.store.dispatch(editProductionClicked({index: productionInput.outputProductionIndex}));
            return;
        }

        this.store.dispatch(
            addProductionWithOutputNameClicked({
                itemPackage: {itemName: itemPackage.itemName, amount: Math.abs(productionInput?.amount ?? 0) || 1},
            }),
        );
    }

    name(index: number, itemPackage: ItemPackage): string {
        return `${index}-${itemPackage.itemName}`;
    }

    protected readonly outerHeight = outerHeight;
}
