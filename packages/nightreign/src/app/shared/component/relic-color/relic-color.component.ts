import {Component, model} from '@angular/core';
import {RelicColorDto, relicColors} from '../../dto/relic-dto';

@Component({
    selector: 'app-relic-color',
    imports: [],
    templateUrl: './relic-color.component.html',
    styleUrl: './relic-color.component.scss',
})
export class RelicColorComponent {
    relicColors = relicColors;
    color = model<RelicColorDto>();
}
