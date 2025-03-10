import {StoreDevtoolsModule} from '@ngrx/store-devtools';

export const environment = {
    production: false,
    devtools: StoreDevtoolsModule.instrument({connectInZone: true}),
};
