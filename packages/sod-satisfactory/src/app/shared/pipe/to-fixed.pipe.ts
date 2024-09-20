import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'toFixed',
    standalone: true,
})
export class ToFixedPipe implements PipeTransform {
    transform(value: number, amount: number): string {
        return value.toFixed(1);
    }
}
