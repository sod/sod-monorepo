import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {Component} from '@angular/core';
import {PushPipe} from '@ngrx/component';
import {Store} from '@ngrx/store';
import {sortBy} from 'lodash-es';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProductionsService} from 'src/app/shared/service/productions-service';
import {AnimatePipe} from '../../../animate/pipe/animate.pipe';
import {ActionAddProductionComponent} from '../../../shared/component/action-add-production/action-add-production.component';
import {ActionProductionComponent} from '../../../shared/component/action-production/action-production.component';
import {MissingInputComponent} from '../../../shared/component/missing-input/missing-input.component';
import {ModalComponent} from '../../../shared/component/modal/modal.component';
import {ProductionOverviewComponent} from '../../../shared/component/production-overview/production-overview.component';
import {ProductionComponent} from '../../../shared/component/production/production.component';
import {Production} from '../../../shared/entities/production';
import {ModalOrInlinePipe} from '../../../shared/pipe/modal-or-inline.pipe';
import {ProductionInput, ProductionInputs, ResolveProductionPipe} from '../../../shared/pipe/resolve-production.pipe';
import {GlobalState} from '../../../shared/store/global-state';
import {selectInputCovered, selectPlannerEditProduction, selectProductions} from '../../../shared/store/planner/planner.selectors';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    standalone: true,
    imports: [
        ProductionOverviewComponent,
        MissingInputComponent,
        ActionAddProductionComponent,
        ActionProductionComponent,
        ModalComponent,
        NgTemplateOutlet,
        ProductionComponent,
        PushPipe,
        AnimatePipe,
        ResolveProductionPipe,
        ModalOrInlinePipe,
        AsyncPipe,
    ],
})
export class DefaultComponent {
    protected breakpoint = {md: 768} as const;

    public productions$: Observable<Production[]> = this.store.select(selectProductions).pipe(
        map((productions) =>
            sortBy(
                productions.filter((production) => production.hasRecipes()),
                'built',
            ),
        ),
    );
    public inputCovered$ = this.store.select(selectInputCovered);
    public edit$ = this.store.select(selectPlannerEditProduction);

    constructor(
        private store: Store<GlobalState>,
        public productionsService: ProductionsService,
    ) {}

    isMissing(inputs: ProductionInputs): ProductionInput[] | undefined {
        const missing = inputs.array.filter((input) => input.isMissing());

        return missing.length ? missing : undefined;
    }
}
