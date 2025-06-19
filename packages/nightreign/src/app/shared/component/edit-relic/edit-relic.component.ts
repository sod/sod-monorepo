import {Component, linkedSignal, model, output, WritableSignal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RelicColorComponent} from '@sod/nightreign/src/app/shared/component/relic-color/relic-color.component';
import {RelicDto} from '@sod/nightreign/src/app/shared/dto/relic-dto';
import {relicProperties} from '@sod/nightreign/src/app/shared/dto/relic-properties';
import {AutosuggestComponent} from '@sod/sdk/src/lib/component/autosuggest/autosuggest.component';
import {getNewUuid} from '@sod/sdk/src/lib/function/uuid';

@Component({
    selector: 'app-edit-relic',
    imports: [ReactiveFormsModule, AutosuggestComponent, RelicColorComponent],
    templateUrl: './edit-relic.component.html',
    styleUrl: './edit-relic.component.scss',
})
export class EditRelicComponent {
    relic = model.required<RelicDto>();
    save = output<RelicDto>();
    delete = output<RelicDto>();

    color = linkedSignal<RelicDto['color']>(() => this.relic().color);
    properties: WritableSignal<RelicDto['properties'][number]>[] = [0, 1, 2].map((index) =>
        linkedSignal(() => this.relic().properties[index]),
    );

    relicProperties = relicProperties;

    toRelicDto(): RelicDto {
        return {
            uuid: this.relic().uuid ?? getNewUuid(),
            color: this.color(),
            properties: this.properties.map((prop) => prop()).filter(Boolean),
        };
    }

    saveClicked() {
        const relic = this.toRelicDto();

        this.relic.set(relic);
        this.save.emit(relic);
    }
}
