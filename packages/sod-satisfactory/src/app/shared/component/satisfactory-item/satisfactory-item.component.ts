import {Component, Input} from '@angular/core';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {AmountWithModifiersPipe} from 'src/app/shared/pipe/amount-with-modifiers.pipe';
import {ProductionInputs} from 'src/app/shared/pipe/resolve-production.pipe';
import {SettingsService} from 'src/app/shared/service/settings-service';
import {SatisfactoryItemImageComponent} from '../satisfactory-item-image/satisfactory-item-image.component';

@Component({
    selector: 'app-satisfactory-item',
    templateUrl: './satisfactory-item.component.html',
    styleUrls: ['./satisfactory-item.component.scss'],
    standalone: true,
    imports: [SatisfactoryItemImageComponent, AmountWithModifiersPipe],
})
export class SatisfactoryItemComponent {
    @Input() itemPackage!: ItemPackage;
    @Input() productionInputs?: ProductionInputs;
    @Input({required: true}) target!: RecipeTarget;
    @Input() theme: 'name-inline' | 'name-tooltip' = 'name-inline';

    hideItemNames = this.settingsService.hideItemNames;

    constructor(private settingsService: SettingsService) {}
}
