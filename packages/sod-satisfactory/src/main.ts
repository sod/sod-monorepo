import {enableProdMode, importProvidersFrom, provideExperimentalZonelessChangeDetection} from '@angular/core';

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withEnabledBlockingInitialNavigation, withHashLocation} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {NavigationActionTiming, StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {DefaultComponent} from 'src/app/planner/component/default/default.component';
import {AppEffects} from 'src/app/shared/store/app/app.effects';
import * as fromApp from 'src/app/shared/store/app/app.reducer';
import {PlannerEffects} from 'src/app/shared/store/planner/planner.effects';
import * as fromPlanner from 'src/app/shared/store/planner/planner.reducer';
import {AppComponent} from './app/app.component';
import {metaReducers, reducers} from './app/reducers';
import {FlatRouterSerializer} from './app/shared/store/router/flat-router-serializer';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(
            [
                {
                    path: 'id/:id',
                    component: DefaultComponent,
                },
                {
                    path: '',
                    component: DefaultComponent,
                },
            ],
            withEnabledBlockingInitialNavigation(),
            withHashLocation(),
        ),
        importProvidersFrom(
            BrowserModule,
            FormsModule,
            StoreModule.forRoot(reducers, {metaReducers}),
            StoreRouterConnectingModule.forRoot({
                stateKey: 'router',
                serializer: FlatRouterSerializer,

                navigationActionTiming: NavigationActionTiming.PostActivation,
            }),
            StoreModule.forFeature('router', routerReducer),
            EffectsModule.forRoot(),
            EffectsModule.forFeature([AppEffects, PlannerEffects, PlannerEffects, AppEffects]),
            StoreModule.forFeature(fromPlanner.plannerFeatureKey, fromPlanner.reducer),
            StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducer),
            !environment.production ? StoreDevtoolsModule.instrument({connectInZone: true}) : [],
        ),
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(withInterceptorsFromDi()),
    ],
}).catch((err) => console.error(err));
