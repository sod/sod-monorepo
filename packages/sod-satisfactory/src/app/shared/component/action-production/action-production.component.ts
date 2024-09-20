import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {createProductionClicked, deleteProductionClicked} from '../../store/planner/planner.actions';
import {LoadProductionComponent} from '../load-production/load-production.component';

@Component({
    selector: 'app-action-production',
    templateUrl: './action-production.component.html',
    styleUrls: ['./action-production.component.scss'],
    standalone: true,
    imports: [LoadProductionComponent],
})
export class ActionProductionComponent {
    createProductionClicked = createProductionClicked;
    deleteProductionClicked = deleteProductionClicked;

    constructor(public store: Store) {}
}
