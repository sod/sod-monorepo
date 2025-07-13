import {NgTemplateOutlet} from '@angular/common';
import {Component, computed, ElementRef, inject, input, model, output, signal, TemplateRef, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DropdownCommand, DropdownComponent} from '@sod/sdk/src/lib/component/dropdown/dropdown.component';
import {InputComponent} from '@sod/sdk/src/lib/component/input/input.component';
import {InputControlDirective} from '@sod/sdk/src/lib/directive/input-control.directive';
import {ItemSelectorService} from '@sod/sdk/src/lib/service/item-selector-service';
import {SearchService} from '@sod/sdk/src/lib/service/search-service';

@Component({
    selector: 'app-autosuggest',
    imports: [DropdownComponent, InputComponent, FormsModule, InputControlDirective, NgTemplateOutlet],
    templateUrl: './autosuggest.component.html',
    styleUrl: './autosuggest.component.scss',
})
export class AutosuggestComponent<T> {
    limit = 50;
    label = input.required<string>();
    model = model.required<T | undefined>();
    items = input.required<readonly T[]>();
    strategy = input<'enum' | 'string'>('enum');
    itemTemplate = input<TemplateRef<unknown>>();

    dropdownController = viewChild.required<DropdownComponent>('dropdownController');
    inputElement = viewChild.required<ElementRef<HTMLInputElement>>('element');

    searchService = inject(SearchService);
    itemSelectorService = inject(ItemSelectorService);
    elementRef = inject(ElementRef);

    needle = signal<string | undefined>(undefined);
    suggestions = computed(() => this.search(this.limit));

    keyboardEnter = output<void>();

    timeout?: number = undefined;

    search(limit: number) {
        const values = this.items();
        const needle = this.needle();

        if (!values || needle === undefined) {
            return undefined;
        }

        return this.searchService.search(needle, values, {limit});
    }

    select(value: any): boolean {
        if (value !== undefined && (this.strategy() === 'string' || this.items().includes(value))) {
            this.model.set(value);
            return true;
        }
        return false;
    }

    input(value: string) {
        this.needle.set(value);

        if (this.strategy() === 'string') {
            this.model.set(value as T);
        }
    }

    open() {
        clearTimeout(this.timeout);
        const startWithSearchTerm =
            this.strategy() === 'string' ? this.model() : this.search(2)?.length === 2 ? (this.model() as string | undefined) : '';
        this.needle.set(startWithSearchTerm as any);
    }

    close(event?: FocusEvent) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(
            () => {
                this.needle.set(undefined);
                this.inputElement().nativeElement.value = (this.model() as string | undefined) ?? '';
                this.dropdownController().close();
            },
            event instanceof FocusEvent && event.relatedTarget === null ? 500 : 1,
        ) as any;
    }

    onKeyboard(command: DropdownCommand): void {
        if (command === 'submit') {
            this.inputElement().nativeElement.blur();
            this.close();
            this.keyboardEnter.emit();
            return;
        }

        const suggestions = this.suggestions();
        if (suggestions !== undefined) {
            this.select(this.itemSelectorService.select(command, this.model(), this.suggestions()!));
            setTimeout(() => {
                this.elementRef.nativeElement.querySelector('.active')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }, 1);
        }
    }
}
