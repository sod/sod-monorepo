import {Injectable, signal, WritableSignal} from '@angular/core';
import {onChanges, skipFirst} from 'src/app/shared/function/signal';
import {z, ZodSchema} from 'zod';
import {JsonService} from './json-service';

export interface LocalStorageStore<T> {
    set: (data: T) => undefined;
    get: () => T | undefined;
    delete: () => undefined;
}

@Injectable({providedIn: 'root'})
export class LocalStorageService {
    private localStorage?: Storage = typeof localStorage === 'undefined' ? undefined : localStorage;

    constructor(private jsonService: JsonService) {}

    getStore<T>(namespace: string): LocalStorageStore<T> {
        return {
            set: (data) => {
                this.set(namespace, data);
            },
            get: () => this.get<T>(namespace),
            delete: () => {
                this.delete(namespace);
            },
        };
    }

    getStrictStore<Z extends ZodSchema, T extends z.infer<Z>, INIT extends () => T>(
        namespace: string,
        schema: Z,
        initialValue: INIT,
    ): WritableSignal<T> {
        const unsafeStore = this.getStore<unknown>(namespace);
        const validate = (data: unknown, errorPrefix?: string): data is T => {
            const result = schema.safeParse(data);
            if (!result.success) {
                console.error(new Error(`${errorPrefix}Data doesn't match schema.`), {
                    error: result.error,
                    schema,
                    data,
                });
            }

            return result.success;
        };

        const safeStoreSet = (data: T): undefined => {
            if (validate(data, 'localStorage.getStrictStore().set(...): ')) {
                unsafeStore.set(data);
            }
        };

        const safeStoreGet = (): T => {
            const data = unsafeStore.get();
            if (data !== undefined && validate(data, 'localStorage.getStrictStore().set(...): ')) {
                return data;
            }

            return initialValue();
        };

        const writable = signal<T>(safeStoreGet());

        onChanges([skipFirst(writable)], (value) => {
            safeStoreSet(value);
        });

        return writable;
    }

    set(key: string, value: any): void {
        this.localStorage?.setItem(key, this.jsonService.toJson(value) ?? '');
    }

    get<T = unknown>(key: string): T | undefined {
        return (this.jsonService.fromJson(this.getRaw(key)) ?? undefined) as T | undefined;
    }

    getRaw(key: string): string | undefined {
        return this.localStorage?.getItem(key) || undefined;
    }

    delete(key: string): void {
        this.localStorage?.removeItem(key);
    }
}
