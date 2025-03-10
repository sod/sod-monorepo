import {enableProdMode, importProvidersFrom, provideExperimentalZonelessChangeDetection} from '@angular/core';

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withEnabledBlockingInitialNavigation, withHashLocation} from '@angular/router';
import {DefaultComponent} from 'src/app/nom/default/default.component';
import {AppComponent} from './app/app.component';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(
            [
                {
                    path: '',
                    component: DefaultComponent,
                },
            ],
            withEnabledBlockingInitialNavigation(),
            withHashLocation(),
        ),
        importProvidersFrom(BrowserModule, FormsModule, environment.devtools),
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(withInterceptorsFromDi()),
    ],
}).catch((err) => console.error(err));
