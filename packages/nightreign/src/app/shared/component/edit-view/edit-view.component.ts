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
    imports: [InputComponent, InputControlDirective, FormsModule, PanelComponent, AutosuggestComponent],
    templateUrl: './edit-view.component.html',
    styleUrl: './edit-view.component.scss',
})
export class EditViewComponent {
    view = model.required<RelicViewDto>();
    name = linkedSignal(() => this.view().name);
    count = linkedSignal(() => this.view().count);
    queriesAmount = linkedSignal(() => this.view().queries.length + 1);
    queries = linkedSignal(() => {
        return Array(this.queriesAmount())
            .fill(0, 0, this.queriesAmount())
            .map((_, index) => linkedSignal(() => this.view().queries[index] ?? ''));
    });

    liveUpdate = output<RelicViewDto>();
    save = output<RelicViewDto>();
    delete = output<RelicViewDto>();

    constructor() {
        // const form = new FormGroup({
        //     name: new FormControl(''),
        //     queries: new FormArray([new FormControl('')]),
        // });

        signalSync(() => this.toRelicViewDto(), this.liveUpdate);
    }

    toRelicViewDto(): RelicViewDto {
        return {
            uuid: this.view().uuid ?? getNewUuid(),
            name: this.name(),
            count: this.count(),
            queries: this.getValidQueries(),
        };
    }

    expandQueries() {
        if (!!this.queries().at(-1)?.()) {
            const clone = this.queries().slice();
            const index = clone.length;
            clone.push(linkedSignal(() => this.view().queries[index] ?? ''));
            this.queries.set(clone);
        }
    }

    getValidQueries() {
        return this.queries()
            .map((query) => query())
            .filter(Boolean);
    }

    saveClicked() {
        this.save.emit(this.toRelicViewDto());
    }

    protected readonly relicProperties = relicProperties;
}
