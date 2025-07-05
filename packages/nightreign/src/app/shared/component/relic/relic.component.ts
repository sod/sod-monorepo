import {Component, computed, inject, input, output} from '@angular/core';
import {RelicColorDto, RelicDto} from '@sod/nightreign/src/app/shared/dto/relic-dto';
import {RelicImagePipe} from '@sod/nightreign/src/app/shared/pipe/relic-image.pipe';
import {RelicFilterService} from '@sod/nightreign/src/app/shared/service/relic-filter-service';

@Component({
    selector: 'app-relic',
    templateUrl: './relic.component.html',
    styleUrl: './relic.component.scss',
    imports: [RelicImagePipe],
})
export class RelicComponent {
    relic = input.required<RelicDto>();
    highlight = input<string[]>();
    edit = output<RelicDto>();
    relicFilterService = inject(RelicFilterService);

    properties = computed(() => {
        const properties = this.relic().properties;
        const highlighter = this.relicFilterService.highlight(this.highlight());

        return properties.map(highlighter);
    });

    colorAsCss = {
        blue: 'rgb(10, 132, 255)',
        red: 'rgb(255, 69, 58)',
        green: 'rgb(48, 209, 88)',
        yellow: 'rgb(255, 214, 10)',
    } as const satisfies Record<RelicColorDto | string, string>;
}
