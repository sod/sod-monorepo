import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Store} from '@ngrx/store';
import {ModalComponent} from '@sod/sdk/src/lib/component/modal/modal.component';
import {BehaviorSubject} from 'rxjs';
import {ProductionsService} from '../../service/productions-service';
import {selectActiveUuid} from '../../store/planner/planner.selectors';
import {SatisfactoryItemComponent} from '../satisfactory-item/satisfactory-item.component';

@Component({
    selector: 'app-load-production',
    templateUrl: './load-production.component.html',
    styleUrls: ['./load-production.component.scss'],
    imports: [ModalComponent, RouterLink, SatisfactoryItemComponent, AsyncPipe],
})
export class LoadProductionComponent {
    protected open$ = new BehaviorSubject<boolean>(false);
    protected activeUuid$ = this.store.select(selectActiveUuid);

    constructor(
        protected productionsService: ProductionsService,
        private store: Store,
    ) {}

    open(): void {
        this.open$.next(true);
    }
}
