import {AfterViewInit, Component, Input} from '@angular/core';
import {Production} from 'src/app/shared/entities/production';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {triggerFocus} from '../../function/trigger-focus';
import {PlusOneUndefinedPipe} from '../../pipe/plus-one-undefined.pipe';
import {ItemPackageComponent} from '../item-package/item-package.component';

@Component({
    selector: 'app-production-input-or-output',
    templateUrl: './production-input-or-output.component.html',
    styleUrls: ['./production-input-or-output.component.scss'],
    standalone: true,
    imports: [ItemPackageComponent, PlusOneUndefinedPipe],
})
export class ProductionInputOrOutputComponent implements AfterViewInit {
    @Input() production!: Production;
    @Input() target!: RecipeTarget;
    @Input() autofocus?: boolean;
    selector = 'item-or-recipe-finder';
    title: Record<RecipeTarget, string> = {inputs: 'Input', outputs: 'Output'};

    ngAfterViewInit() {
        if (this.autofocus) {
            const query = `.${this.selector + this.target}:last-child input`;
            const inputElement: HTMLInputElement | null = document.querySelector(query);

            setTimeout(() => triggerFocus(inputElement), 1);
        }
    }
}
