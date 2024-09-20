import {NgTemplateOutlet} from '@angular/common';
import {Component, Input, OnDestroy, OnInit, Output, TemplateRef} from '@angular/core';
import {PushPipe} from '@ngrx/component';
import {BehaviorSubject, Subject, delay, filter, fromEvent, merge, takeUntil} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {isDefined} from 'src/app/shared/function/is-defined';
import {AnimatePipe} from '../../../animate/pipe/animate.pipe';

let id = 0;
const open$ = new BehaviorSubject(0);
export type DropdownCommand = 'start' | 'end' | 'prev' | 'next' | 'submit';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    standalone: true,
    imports: [NgTemplateOutlet, PushPipe, AnimatePipe],
})
export class DropdownComponent implements OnInit, OnDestroy {
    @Input({required: true}) element!: Element;
    @Input({required: true}) dropdown!: TemplateRef<unknown>;
    @Output() keyboard = new Subject<DropdownCommand>();

    private id = ++id;
    private navMapMeta: Record<string, DropdownCommand | undefined> = {
        ArrowUp: 'start',
        ArrowDown: 'end',
    };
    private navMap: Record<string, DropdownCommand | undefined> = {
        ArrowUp: 'prev',
        ArrowDown: 'next',
        Enter: 'submit',
    } as const;
    public open$ = open$.pipe(map((open) => open === this.id));
    public destroy$ = new Subject<void>();

    close(): void {
        if (open$.value === this.id) {
            open$.next(0);
        }
    }

    ngOnInit() {
        const focus$ = fromEvent(this.element, 'focus');
        const click$ = fromEvent(this.element, 'click');
        const nav$ = fromEvent<KeyboardEvent>(this.element, 'keydown').pipe(
            map((event) => ({
                event,
                command: (event.metaKey || event.ctrlKey ? this.navMapMeta : this.navMap)[event.key],
            })),
            tap(({command, event}) => command && this.keyboard.observed && event.preventDefault()),
            map(({command}) => command),
            filter(isDefined),
        );
        const esc$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(filter((event) => event.key === 'Escape'));

        const onopen$ = merge(focus$, click$).pipe(
            tap(() => {
                open$.next(this.id);
            }),
        );
        const close$ = esc$.pipe(
            delay(100),
            tap(() => {
                this.close();
            }),
        );

        merge(onopen$, close$).pipe(takeUntil(this.destroy$)).subscribe();
        nav$.pipe(takeUntil(this.destroy$)).subscribe(this.keyboard);
    }

    ngOnDestroy() {
        this.destroy$.next();
    }
}
