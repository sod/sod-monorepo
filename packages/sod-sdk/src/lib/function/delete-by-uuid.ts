import {untracked, WritableSignal} from '@angular/core';

export function deleteByUuid<
    T extends {
        uuid: string;
    },
>(uuid: string, itemsSignal: WritableSignal<T[]>) {
    untracked(() => {
        const items = itemsSignal();
        if (!items.length) {
            return;
        }

        const index = items.findIndex((inner) => inner.uuid === uuid);
        if (index > -1) {
            const clone = items.slice();
            clone.splice(index, 1);
            itemsSignal.set(clone);
        }
    });
}
