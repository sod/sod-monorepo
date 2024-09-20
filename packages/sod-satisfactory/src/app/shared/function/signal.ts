import {effect, Signal, signal} from '@angular/core';

export function skipFirst<T>(original: Signal<T>): Signal<T> {
    let init = true;
    const delegate = signal<T>(original());
    effect(
        () => {
            const next = original();
            if (init) {
                init = false;
                return;
            }
            delegate.set(next);
        },
        {allowSignalWrites: true},
    );

    return delegate;
}

type UnwrapSignal<T> = T extends Signal<infer U> ? U : T;
type UnwrapSignals<T> = {
    [P in keyof T]: UnwrapSignal<T[P]>;
};

export function onChanges<ONS extends Signal<unknown>[]>(ons: ONS, fn: (...x: UnwrapSignals<ONS>) => void) {
    let init = true;
    effect(() => {
        const values = ons.map((on) => on());
        if (init) {
            init = false;
            return;
        }
        fn(...(values as any));
    });
}
