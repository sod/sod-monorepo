import {computed, inject, Injectable, signal} from '@angular/core';
import {RelicDto, RelicsStoreSchema} from '@sod/nightreign/src/app/shared/dto/relic-dto';
import {RelicsViewStoreSchema, RelicViewDto} from '@sod/nightreign/src/app/shared/dto/relic-view-dto';
import {deleteByUuid} from '@sod/sdk/src/lib/function/delete-by-uuid';
import {updateByUuid} from '@sod/sdk/src/lib/function/update-by-uuid';
import {getNewUuid} from '@sod/sdk/src/lib/function/uuid';
import {LocalStorageService} from '@sod/sdk/src/lib/service/local-storage-service';
import {z} from 'zod';

@Injectable({providedIn: 'root'})
export class RelicsService {
    private readonly localStorageService = inject(LocalStorageService);
    public readonly relics = this.localStorageService.getStrictStore('relics', RelicsStoreSchema, () => []);
    public readonly uuids = computed(() => new Set(this.relics().map((relic) => relic.uuid)));
    public readonly views = this.localStorageService.getStrictStore('views', RelicsViewStoreSchema, () => []);
    public readonly activeViewUuid = this.localStorageService.getStrictStore('activeViewUuid', z.string(), () => '');
    public readonly activeView = computed(() => this.views().find((view) => view.uuid === this.activeViewUuid()));
    public readonly activeViewEdit = signal<boolean>(false);

    updateRelic(relic: Partial<RelicDto>) {
        updateByUuid({...relic, uuid: relic?.uuid ?? getNewUuid()}, this.relics, 'prepend');
    }

    deleteRelic(uuid: string) {
        deleteByUuid(uuid, this.relics);
    }

    updateRelicView(view: Partial<RelicViewDto>) {
        updateByUuid({...view, uuid: view?.uuid ?? getNewUuid()}, this.views, 'append');
    }

    deleteRelicView(uuid: string) {
        deleteByUuid(uuid, this.views);
    }
}
