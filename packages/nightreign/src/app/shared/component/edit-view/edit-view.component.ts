import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, linkedSignal, model, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {relicProperties} from '@sod/nightreign/src/app/shared/dto/relic-properties';
import {RelicViewDto} from '@sod/nightreign/src/app/shared/dto/relic-view-dto';
import {AutosuggestComponent} from '@sod/sdk/src/lib/component/autosuggest/autosuggest.component';
import {InputComponent} from '@sod/sdk/src/lib/component/input/input.component';
import {PanelComponent} from '@sod/sdk/src/lib/component/panel/panel.component';
import {InputControlDirective} from '@sod/sdk/src/lib/directive/input-control.directive';
import {signalSync} from '@sod/sdk/src/lib/function/signal-sync';
import {getNewUuid} from '@sod/sdk/src/lib/function/uuid';

@Component({
    selector: 'app-edit-view',
    imports: [
        InputComponent,
        InputControlDirective,
        FormsModule,
        PanelComponent,
        AutosuggestComponent,
        CdkDropList,
        CdkDragHandle,
        CdkDrag,
    ],
    templateUrl: './edit-view.component.html',
    styleUrl: './edit-view.component.scss',
})
export class EditViewComponent {
    view = model.required<RelicViewDto>();
    name = linkedSignal(() => this.view().name);
    queries = linkedSignal(() => [...(this.view().queries ?? []), '']);

    liveUpdate = output<RelicViewDto>();
    save = output<RelicViewDto>();
    delete = output<RelicViewDto>();

    constructor() {
        signalSync(() => this.toRelicViewDto(), this.liveUpdate);
    }

    dropped = (event: CdkDragDrop<unknown>) => {
        this.queries.update((queries) => {
            moveItemInArray(queries, event.previousIndex, event.currentIndex);
            return queries;
        });
    };

    sortPredicate = (index: number, _item: CdkDrag<number>) => {
        return index !== this.queries().length - 1;
    };

    toRelicViewDto(): RelicViewDto {
        return {
            uuid: this.view().uuid ?? getNewUuid(),
            name: this.name(),
            queries: this.getValidUniqueQueries(),
        };
    }

    queryChanged(index: number, value?: string) {
        this.queries()[index] = value ?? '';

        if (value && !!this.queries().at(-1)) {
            const clone = this.queries().slice();
            clone.push('');
            this.queries.set(clone);
        }
    }

    getValidUniqueQueries() {
        return Array.from(new Set(this.queries().filter(Boolean)));
    }

    saveClicked() {
        this.save.emit(this.toRelicViewDto());
    }

    protected readonly relicProperties = relicProperties;
}
