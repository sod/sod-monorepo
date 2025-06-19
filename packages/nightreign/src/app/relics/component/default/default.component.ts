import {Component, computed, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EditRelicComponent} from '@sod/nightreign/src/app/shared/component/edit-relic/edit-relic.component';
import {EditViewComponent} from '@sod/nightreign/src/app/shared/component/edit-view/edit-view.component';
import {createNewRelic, RelicDto} from '@sod/nightreign/src/app/shared/dto/relic-dto';
import {createNewRelicView, RelicViewDto} from '@sod/nightreign/src/app/shared/dto/relic-view-dto';
import {RelicFilterService} from '@sod/nightreign/src/app/shared/service/relic-filter-service';
import {RelicsService} from '@sod/nightreign/src/app/shared/service/relics-service';
import {PanelComponent} from '@sod/sdk/src/lib/component/panel/panel.component';
import {RelicComponent} from 'src/app/shared/component/relic/relic.component';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    imports: [RelicComponent, EditRelicComponent, PanelComponent, FormsModule, EditViewComponent],
})
export class DefaultComponent {
    relicsService = inject(RelicsService);
    relicFilterService = inject(RelicFilterService);

    editRelic = model<RelicDto | undefined>(undefined);
    editRelicView = model<RelicViewDto | undefined>(undefined);
    editRelicViewChanges = signal<RelicViewDto | undefined>(undefined);

    activeViewOrEditView = computed(() => {
        const editRelicView = this.editRelicViewChanges() ?? this.editRelicView();
        const activeView = this.relicsService.activeView();

        if (editRelicView && editRelicView?.uuid === activeView?.uuid) {
            return editRelicView;
        }

        return activeView;
    });
    relics = computed(() => {
        const relics = this.relicsService.relics();
        const activeView = this.activeViewOrEditView();

        return activeView?.queries.length ? this.relicFilterService.filter(relics, activeView) : relics;
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
        this.editRelicView.set(undefined);
        this.editRelicViewChanges.set(undefined);
    }

    deleteRelicView(uuid: string) {
        this.relicsService.deleteRelicView(uuid);
        this.editRelicView.set(undefined);
        this.editRelicViewChanges.set(undefined);
    }
}
