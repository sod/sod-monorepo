import {Injectable} from '@angular/core';
import {DropdownCommand} from 'src/app/shared/component/dropdown/dropdown.component';

@Injectable({providedIn: 'root'})
export class ItemSelectorService {
    select<T>(command: DropdownCommand, selected: T | undefined, items: T[]): T | undefined {
        if (command === 'end') {
            return items.at(-1);
        }
        if (command === 'start') {
            return items.at(0);
        }

        const index = items.indexOf(selected!);

        if (command === 'next') {
            return items.at(index === -1 ? 0 : index + 1) ?? items.at(-1);
        }
        if (command === 'prev') {
            return index <= 0 ? undefined : (items.at(index - 1) ?? items.at(0));
        }

        return selected;
    }
}
