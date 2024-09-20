import {NgClass} from '@angular/common';
import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {AbsolutePipe} from '../../pipe/absolute.pipe';
import {ProductionInput} from '../../pipe/resolve-production.pipe';
import {ToFixedPipe} from '../../pipe/to-fixed.pipe';
import {inputCoveredClicked} from '../../store/planner/planner.actions';
import {SatisfactoryItemImageComponent} from '../satisfactory-item-image/satisfactory-item-image.component';

@Component({
    selector: 'app-missing-input',
    templateUrl: './missing-input.component.html',
    styleUrls: ['./missing-input.component.scss'],
    standalone: true,
    imports: [NgClass, SatisfactoryItemImageComponent, AbsolutePipe, ToFixedPipe],
})
export class MissingInputComponent {
    @Input({required: true}) input!: ProductionInput;

    constructor(private store: Store) {}
    toggle(): void {
        this.store.dispatch(inputCoveredClicked({name: this.input.itemName, amount: this.input.amount}));
    }
}
