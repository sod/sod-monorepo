import {Component, computed, input, output} from '@angular/core';
import {RelicColorDto, RelicDto} from '@sod/nightreign/src/app/shared/dto/relic-dto';
import {RelicViewDto} from '@sod/nightreign/src/app/shared/dto/relic-view-dto';

const escapeRegex = (value: string) => (RegExp as any).escape(value);

@Component({
    selector: 'app-relic',
    templateUrl: './relic.component.html',
    styleUrl: './relic.component.scss',
})
export class RelicComponent {
    relic = input.required<RelicDto>();
    highlight = input<RelicViewDto>();
    edit = output<RelicDto>();

    properties = computed(() => {
        const properties = this.relic().properties;
        const highlight = this.highlight();

        if (!highlight?.queries.length) {
            return properties.map((value) => [{value, class: ''}]);
        }

        const queries = highlight?.queries.map((query) => query.trim().split(/ +/)) ?? [];

        return properties.map((value) => {
            const match = queries.find((needles) => needles!.every((needle) => value.toLowerCase().indexOf(needle.toLowerCase()) !== -1));

            if (match) {
                const rx = new RegExp(`(${match.map((inner) => escapeRegex(inner)).join('|')})`, 'ig');
                const stack = [];
                let next;
                let pos = 0;

                while ((next = rx.exec(value))) {
                    if (next.index > pos) {
                        stack.push({value: value.slice(pos, next.index), class: 'text-gray-600'});
                    }
                    stack.push({value: next[0], class: 'text-white'});
                    pos = next.index + next[0].length;
                }

                if (pos < value.length) {
                    stack.push({value: value.slice(pos, value.length), class: 'text-gray-600'});
                }

                return stack;
            }

            return [{value, class: 'text-gray-600'}];
        });
    });

    colorAsCss = {
        blue: 'rgb(10, 132, 255)',
        red: 'rgb(255, 69, 58)',
        green: 'rgb(48, 209, 88)',
        yellow: 'rgb(255, 214, 10)',
    } as const satisfies Record<RelicColorDto | string, string>;
}
