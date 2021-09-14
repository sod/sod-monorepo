import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {Production} from 'src/app/shared/entities/production';
import {GlobalState} from 'src/app/shared/store/global-state';
import {editProductionClicked} from 'src/app/shared/store/planner/planner.actions';
import {selectPlannerEdit} from 'src/app/shared/store/planner/planner.selectors';

@Component({
    selector: 'app-production-overview',
    templateUrl: './production-overview.component.html',
    styleUrls: ['./production-overview.component.scss'],
})
export class ProductionOverviewComponent {
    @Input() production!: Production;
    public edit$ = this.store.select(selectPlannerEdit);

    constructor(private store: Store<GlobalState>) {}

    edit(index: number): void {
        this.store.dispatch(editProductionClicked({index}));
    }
}
