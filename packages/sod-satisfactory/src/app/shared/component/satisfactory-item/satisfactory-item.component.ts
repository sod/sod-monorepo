import {Component, Input} from '@angular/core';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {ProductionInputs} from 'src/app/shared/pipe/resolve-production.pipe';

@Component({
    selector: 'app-satisfactory-item',
    templateUrl: './satisfactory-item.component.html',
    styleUrls: ['./satisfactory-item.component.scss'],
})
export class SatisfactoryItemComponent {
    @Input() itemPackage!: ItemPackage;
    @Input() productionInputs?: ProductionInputs;
    @Input({required: true}) target!: RecipeTarget;
    @Input() theme: 'name-inline' | 'name-tooltip' = 'name-inline';
}
