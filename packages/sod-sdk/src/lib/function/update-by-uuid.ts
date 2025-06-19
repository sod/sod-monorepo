import {untracked, WritableSignal} from '@angular/core';

const mutationByStrategy = {
    append: (clone: any[], item: any) => clone.push(item),
    prepend: (clone: any[], item: any) => clone.unshift(item),
    replace: (clone: any[], item: any, index: number) => {
        clone[index] = item;
    },
} as const;

export function updateByUuid<
    T extends {
        uuid: string;
    },
>(item: T, itemsSignal: WritableSignal<T[]>, addStrategy: 'append' | 'prepend') {
    untracked(() => {
        const items = itemsSignal();
        if (items) {
            const index = items.findIndex((inner) => inner.uuid === item.uuid);
            const clone = items.slice();
            mutationByStrategy[index > -1 ? 'replace' : addStrategy](clone, item, index);

            itemsSignal.set(clone);
        }
    });
}
