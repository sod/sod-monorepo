import {effect, OutputEmitterRef} from '@angular/core';

export function signalSync<T>(getter: () => T, receiver: OutputEmitterRef<T>) {
    let update = false;
    effect(() => {
        const value = getter();
        if (update) {
            receiver.emit(value);
        }
    });
    update = true;
}
