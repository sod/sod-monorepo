import {Pipe, PipeTransform} from '@angular/core';
import {ItemPackage} from 'src/app/shared/entities/item-package';

@Pipe({
    name: 'amountWithModifiers',
    standalone: true,
})
export class AmountWithModifiersPipe implements PipeTransform {
    transform(value: ItemPackage | undefined, target: 'inputs' | 'outputs'): string {
        return value?.parent.parent.multiply(value?.amount, target)?.toFixed(1) ?? '';
    }
}
