import {Component, computed, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EditRelicComponent} from '@sod/nightreign/src/app/shared/component/edit-relic/edit-relic.component';
import {EditViewComponent} from '@sod/nightreign/src/app/shared/component/edit-view/edit-view.component';
import {createNewRelic, RelicDto} from '@sod/nightreign/src/app/shared/dto/relic-dto';
import {createNewRelicView, RelicViewDto} from '@sod/nightreign/src/app/shared/dto/relic-view-dto';
import {RelicFilterService} from '@sod/nightreign/src/app/shared/service/relic-filter-service';
import {RelicsService} from '@sod/nightreign/src/app/shared/service/relics-service';
import {InputComponent} from '@sod/sdk/src/lib/component/input/input.component';
import {PanelComponent} from '@sod/sdk/src/lib/component/panel/panel.component';
import {InputControlDirective} from '@sod/sdk/src/lib/directive/input-control.directive';
import {RelicComponent} from 'src/app/shared/component/relic/relic.component';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    imports: [RelicComponent, EditRelicComponent, PanelComponent, FormsModule, EditViewComponent, InputComponent, InputControlDirective],
})
export class DefaultComponent {
    relicsService = inject(RelicsService);
    relicFilterService = inject(RelicFilterService);

    view = this.relicsService.activeView;
    editView = computed(() => (this.relicsService.activeViewEdit() ? this.view() : undefined));

    select({uuid, edit = false}: {uuid?: string; edit?: boolean}) {
        if (!uuid) {
            const newView = createNewRelicView();
            this.relicsService.updateRelicView(newView);
            uuid = newView.uuid;
        }

        this.relicsService.activeViewUuid.set(uuid);
        this.relicsService.activeViewEdit.set(edit);
    }

    editRelic = model<RelicDto | undefined>(undefined);
    editRelicViewChanges = signal<RelicViewDto | undefined>(undefined);

    count = model(1);
    uniqueQueries = computed(() => {
        return Array.from(this.view()?.queries ?? []);
    });
    selectedQueries = signal<string[]>([]);
    selectedQueriesOrDefault = computed(() => (this.selectedQueries().length ? this.selectedQueries() : (this.view()?.queries ?? [])));

    relics = computed(() => {
        const relics = this.relicsService.relics();
        const activeView = this.view();

        return activeView?.queries.length ? this.relicFilterService.filter(relics, this.selectedQueriesOrDefault(), this.count()) : relics;
    });

    createNewRelic = createNewRelic;
    createNewRelicView = createNewRelicView;

    saveRelic(relic: RelicDto) {
        this.relicsService.updateRelic(relic);
        this.editRelic.set(undefined);
    }

    deleteRelic(uuid: string) {
        this.relicsService.deleteRelic(uuid);
        this.editRelic.set(undefined);
    }

    saveRelicView(relic: RelicViewDto) {
        this.relicsService.updateRelicView(relic);
        this.relicsService.activeViewEdit.set(false);
        this.editRelicViewChanges.set(undefined);
    }

    deleteRelicView(uuid: string) {
        this.relicsService.deleteRelicView(uuid);
        this.relicsService.activeViewEdit.set(false);
        this.editRelicViewChanges.set(undefined);
    }
}
