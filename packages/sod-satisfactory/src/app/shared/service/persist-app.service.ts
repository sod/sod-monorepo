import {Injectable} from '@angular/core';
import {isDefined} from '@sod/sdk/src/lib/function/is-defined';
import {validateSchema} from '@sod/sdk/src/lib/function/validate-schema';
import {JsonService} from '@sod/sdk/src/lib/service/json-service';
import {LocalStorageService} from '@sod/sdk/src/lib/service/local-storage-service';
import {distinctUntilKeyChanged, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {z} from 'zod';
import {plannerStateSchema} from '../store/planner/planner.reducer';

export const persistAppDataSchema = z.object({
    planner: plannerStateSchema,
});

export type PersistAppData = z.infer<typeof persistAppDataSchema>;

@Injectable({providedIn: 'root'})
export class PersistAppService {
    private uuids = this.localStorageService.getStore<{uuid: string}[]>('sod-satisfactory__uuids');

    constructor(
        private localStorageService: LocalStorageService,
        private jsonService: JsonService,
    ) {
        this.migrate();
    }

    migrate(): void {
        const store = this.localStorageService.getStore<PersistAppData>(`sod-satisfactory`);
        const old = store.get();

        if (old) {
            this.persist(old);
            store.delete();
        }
    }

    persist(data: PersistAppData) {
        const uuid = data.planner.uuid;

        if (uuid) {
            this.getStore(uuid).set(data);
            this.ensureUuid(uuid);
        }
    }

    delete(data: PersistAppData) {
        const uuid = data.planner.uuid;

        if (uuid) {
            const uuids = this.uuids.get()?.filter((inner) => inner.uuid !== uuid);
            this.uuids.set(uuids ?? []);
            this.localStorageService.delete(this.key(uuid));
        }
    }

    getPersistedUuid(): string | undefined {
        return this.uuids.get()?.[0]?.uuid;
    }

    restore(uuid?: string): PersistAppData | undefined {
        const store = uuid ? this.getStore(uuid) : undefined;
        const data = store?.get();

        if (data?.planner) {
            const result = {...data, planner: {...data.planner, uuid: uuid!}};

            if (validateSchema('app store', persistAppDataSchema, result)) {
                return result;
            }

            store?.delete();
        }

        return undefined;
    }

    getAll(tick$: Observable<void>): Observable<PersistAppData[]> {
        return tick$.pipe(
            map(() => {
                const rawData = (this.uuids.get() ?? [])
                    .map((inner) => this.localStorageService.getRaw(this.key(inner.uuid)))
                    .filter(isDefined);

                return {rawData, id: rawData.join('::\n::')};
            }),
            distinctUntilKeyChanged('id'),
            map(({rawData}) => {
                return rawData.map((value) => this.jsonService.fromJson(value) as PersistAppData | undefined).filter(isDefined);
            }),
        );
    }

    private getStore(uuid: string) {
        return this.localStorageService.getStore<PersistAppData>(this.key(uuid));
    }

    private ensureUuid(uuid: string): void {
        const uuids = this.uuids.get() ?? [];
        const has = uuids.some((inner) => inner.uuid === uuid);

        if (!has) {
            this.uuids.set(uuids.concat({uuid}));
        }
    }

    private key(uuid: string): string {
        return `sod-satisfactory__${uuid}`;
    }
}
