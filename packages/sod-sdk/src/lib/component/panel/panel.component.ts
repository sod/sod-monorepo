import {NgClass} from '@angular/common';
import {Component, input} from '@angular/core';

@Component({
    selector: 'app-panel',
    imports: [NgClass],
    templateUrl: './panel.component.html',
    styleUrl: './panel.component.scss',
})
export class PanelComponent {
    title = input<string>();
    theme = input<'default' | 'form'>('default');
}
