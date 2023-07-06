import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {ActionAddProductionComponent} from 'src/app/shared/component/action-add-production/action-add-production.component';
import {ActionClearProductionComponent} from 'src/app/shared/component/action-clear-production/action-clear-production.component';
import {AmountWithModifiersPipe} from 'src/app/shared/pipe/amount-with-modifiers.pipe';
import {SatisfactoriyItemImagePipe} from 'src/app/shared/pipe/satisfactoriy-item-image.pipe';
import {SharedNgZorroModule} from '../shared-ng-zorro/shared-ng-zorro.module';
import {ItemPackageComponent} from './component/item-package/item-package.component';
import {ItemComponent} from './component/item/item.component';
import {MissingInputComponent} from './component/missing-input/missing-input.component';
import {PackageImagesComponent} from './component/package-images/package-images.component';
import {ProductionInputOrOutputComponent} from './component/production-input-or-output/production-input-or-output.component';
import {ProductionInputTodoComponent} from './component/production-input-todo/production-input-todo.component';
import {ProductionOverviewComponent} from './component/production-overview/production-overview.component';
import {ProductionComponent} from './component/production/production.component';
import {RecipeComponent} from './component/recipe/recipe.component';
import {SatisfactoryItemImageComponent} from './component/satisfactory-item-image/satisfactory-item-image.component';
import {SatisfactoryItemComponent} from './component/satisfactory-item/satisfactory-item.component';
import {SatisfactoryItemsComponent} from './component/satisfactory-items/satisfactory-items.component';
import {AbsolutePipe} from './pipe/absolute.pipe';
import {FilterCaseInsensitivePipe} from './pipe/filter-case-insensitive.pipe';
import {PlusOneUndefinedPipe} from './pipe/plus-one-undefined.pipe';
import {ProductionTitlePipe} from './pipe/production-title.pipe';
import {RecipeDataSummaryPipe} from './pipe/recipe-data-summary.pipe';
import {ResolveProductionPipe} from './pipe/resolve-production.pipe';
import {AppEffects} from './store/app/app.effects';
import * as fromApp from './store/app/app.reducer';
import {PlannerEffects} from './store/planner/planner.effects';
import * as fromPlanner from './store/planner/planner.reducer';
import { ToFixedPipe } from './pipe/to-fixed.pipe';

@NgModule({
    declarations: [
        RecipeComponent,
        ActionAddProductionComponent,
        ProductionComponent,
        ActionClearProductionComponent,
        ItemComponent,
        ItemPackageComponent,
        ProductionInputOrOutputComponent,
        FilterCaseInsensitivePipe,
        PlusOneUndefinedPipe,
        AmountWithModifiersPipe,
        ProductionOverviewComponent,
        ProductionTitlePipe,
        ProductionInputTodoComponent,
        ResolveProductionPipe,
        SatisfactoriyItemImagePipe,
        SatisfactoryItemImageComponent,
        SatisfactoryItemComponent,
        SatisfactoryItemsComponent,
        RecipeDataSummaryPipe,
        PackageImagesComponent,
        MissingInputComponent,
        AbsolutePipe,
        ToFixedPipe,
    ],
    imports: [
        CommonModule,
        SharedNgZorroModule,
        EffectsModule.forFeature([AppEffects, PlannerEffects, PlannerEffects, AppEffects]),
        StoreModule.forFeature(fromPlanner.plannerFeatureKey, fromPlanner.reducer),
        StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducer),
        FormsModule,
    ],
    exports: [
        SharedNgZorroModule,
        RecipeComponent,
        ActionAddProductionComponent,
        ProductionComponent,
        ActionClearProductionComponent,
        FormsModule,
        ItemComponent,
        ItemPackageComponent,
        ProductionInputOrOutputComponent,
        FilterCaseInsensitivePipe,
        PlusOneUndefinedPipe,
        AmountWithModifiersPipe,
        ProductionOverviewComponent,
        ProductionTitlePipe,
        ProductionInputTodoComponent,
        ResolveProductionPipe,
        SatisfactoriyItemImagePipe,
        SatisfactoryItemImageComponent,
        SatisfactoryItemComponent,
        SatisfactoryItemsComponent,
        RecipeDataSummaryPipe,
        PackageImagesComponent,
        MissingInputComponent,
    ],
})
export class SharedModule {}
