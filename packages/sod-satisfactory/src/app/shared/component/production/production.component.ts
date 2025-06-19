import {NgClass} from '@angular/common';
import {Component, computed, Input, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {InputComponent} from '@sod/sdk/src/lib/component/input/input.component';
import {InputControlDirective} from '@sod/sdk/src/lib/directive/input-control.directive';
import {Production} from 'src/app/shared/entities/production';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {IsThemePipe} from 'src/app/shared/pipe/is-theme.pipe';
import {GlobalState} from 'src/app/shared/store/global-state';
import {closeProductionClicked, removeProductionClicked, updateProductionClicked} from 'src/app/shared/store/planner/planner.actions';
import {ProductionInputOrOutputComponent} from '../production-input-or-output/production-input-or-output.component';
import {SatisfactoryItemImageComponent} from '../satisfactory-item-image/satisfactory-item-image.component';

@Component({
    selector: 'app-production',
    templateUrl: './production.component.html',
    styleUrls: ['./production.component.scss'],
    imports: [
        ProductionInputOrOutputComponent,
        InputComponent,
        FormsModule,
        InputControlDirective,
        NgClass,
        SatisfactoryItemImageComponent,
        IsThemePipe,
    ],
})
export class ProductionComponent {
    @Input() production!: Production;
    options = ['Inputs', 'Outputs', 'Modifiers'];
    select = signal<string | undefined>(undefined);
    selected = computed(() => this.select() ?? 'Outputs');

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
