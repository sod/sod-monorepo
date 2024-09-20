import {Pipe, PipeTransform} from '@angular/core';
import {distinctUntilChanged, fromEvent, Observable, startWith} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({
    name: 'modalOrInline',
    standalone: true,
})
export class ModalOrInlinePipe implements PipeTransform {
    transform(modalUpToWidth: number): Observable<'modal' | 'inline'> {
        return fromEvent(window, 'resize', {passive: true}).pipe(
            startWith('init'),
            map(() => (window.innerWidth < modalUpToWidth ? 'modal' : 'inline')),
            distinctUntilChanged(),
        );
    }
}
