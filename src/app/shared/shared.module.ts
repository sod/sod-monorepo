import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {SharedNgZorroModule} from '../shared-ng-zorro/shared-ng-zorro.module';
import {AddProductionComponent} from './component/add-production/add-production.component';
import {RecipeComponent} from './component/recipe/recipe.component';
import {AppEffects} from './store/app/app.effects';
import * as fromApp from './store/app/app.reducer';
import {PlannerEffects} from './store/planner/planner.effects';
import * as fromPlanner from './store/planner/planner.reducer';
import { ProductionComponent } from './component/production/production.component';
import { ClearProductionComponent } from './component/clear-production/clear-production.component';

@NgModule({
    declarations: [RecipeComponent, AddProductionComponent, ProductionComponent, ClearProductionComponent],
    imports: [
        CommonModule,
        SharedNgZorroModule,
        EffectsModule.forFeature([AppEffects, PlannerEffects, PlannerEffects, AppEffects]),
        StoreModule.forFeature(fromPlanner.plannerFeatureKey, fromPlanner.reducer),
        StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducer),
    ],
    exports: [SharedNgZorroModule, RecipeComponent, AddProductionComponent, ProductionComponent, ClearProductionComponent],
})
export class SharedModule {}
