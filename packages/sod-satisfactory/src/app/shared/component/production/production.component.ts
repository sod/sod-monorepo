import {NgClass} from '@angular/common';
import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Production} from 'src/app/shared/entities/production';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {GlobalState} from 'src/app/shared/store/global-state';
import {closeProductionClicked, removeProductionClicked, updateProductionClicked} from 'src/app/shared/store/planner/planner.actions';
import {InputControlDirective} from '../../directive/input-control.directive';
import {InputComponent} from '../input/input.component';
import {ProductionInputOrOutputComponent} from '../production-input-or-output/production-input-or-output.component';
import {SatisfactoryItemImageComponent} from '../satisfactory-item-image/satisfactory-item-image.component';

@Component({
    selector: 'app-production',
    templateUrl: './production.component.html',
    styleUrls: ['./production.component.scss'],
    standalone: true,
    imports: [
        ProductionInputOrOutputComponent,
        InputComponent,
        FormsModule,
        InputControlDirective,
        NgClass,
        SatisfactoryItemImageComponent,
    ],
})
export class ProductionComponent {
    @Input() production!: Production;

    constructor(private store: Store<GlobalState>) {}

    updateProduction(production: Production, dto: Partial<ProductionDto>): void {
        this.store.dispatch(updateProductionClicked({relation: production.unwrap(), production: dto}));
    }

    removeProduction(production: Production): void {
        this.store.dispatch(removeProductionClicked({relation: production.unwrap()}));
    }

    closeProduction(): void {
        this.store.dispatch(closeProductionClicked());
    }
}
