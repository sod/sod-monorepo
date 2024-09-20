import {AsyncPipe, NgClass} from '@angular/common';
import {Component, Input} from '@angular/core';
import {PushPipe} from '@ngrx/component';
import {Store} from '@ngrx/store';
import {Production} from 'src/app/shared/entities/production';
import {ProductionInputs} from 'src/app/shared/pipe/resolve-production.pipe';
import {GlobalState} from 'src/app/shared/store/global-state';
import {editProductionClicked, productionBuiltClicked, productionUpNextClicked} from 'src/app/shared/store/planner/planner.actions';
import {selectPlannerEdit} from 'src/app/shared/store/planner/planner.selectors';
import {ProductionTitlePipe} from '../../pipe/production-title.pipe';
import {SatisfactoryItemsComponent} from '../satisfactory-items/satisfactory-items.component';

@Component({
    selector: 'app-production-overview',
    templateUrl: './production-overview.component.html',
    styleUrls: ['./production-overview.component.scss'],
    standalone: true,
    imports: [NgClass, SatisfactoryItemsComponent, PushPipe, ProductionTitlePipe, AsyncPipe],
})
export class ProductionOverviewComponent {
    @Input() production!: Production;
    @Input() productionInputs!: ProductionInputs;
    @Input() positionInList!: number;
    public edit$ = this.store.select(selectPlannerEdit);

    constructor(private store: Store<GlobalState>) {}

    edit(index: number): void {
        this.store.dispatch(editProductionClicked({index}));
    }

    built(production: Production): void {
        this.store.dispatch(productionBuiltClicked({relation: production.unwrap()}));
    }

    moveUp(production: Production): void {
        this.store.dispatch(productionUpNextClicked({relation: production.unwrap()}));
    }
}
