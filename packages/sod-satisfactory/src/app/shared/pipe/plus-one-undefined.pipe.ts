import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'plusOneUndefined',
    standalone: true,
})
export class PlusOneUndefinedPipe implements PipeTransform {
    transform<T>(values: T[]): [...T[], undefined] {
        return [...values, undefined];
    }
}
