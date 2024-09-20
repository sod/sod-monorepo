import {enableProdMode, importProvidersFrom} from '@angular/core';

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {NavigationActionTiming, StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app/app-routing.module';
import {AppComponent} from './app/app.component';
import {metaReducers, reducers} from './app/reducers';
import {SharedModule} from './app/shared/shared.module';
import {FlatRouterSerializer} from './app/shared/store/router/flat-router-serializer';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            StoreModule.forRoot(reducers, {metaReducers}),
            StoreRouterConnectingModule.forRoot({
                stateKey: 'router',
                serializer: FlatRouterSerializer,

                navigationActionTiming: NavigationActionTiming.PostActivation,
            }),
            StoreModule.forFeature('router', routerReducer),
            EffectsModule.forRoot(),
            SharedModule,
            !environment.production ? StoreDevtoolsModule.instrument({connectInZone: true}) : [],
        ),
        provideHttpClient(withInterceptorsFromDi()),
    ],
}).catch((err) => console.error(err));
