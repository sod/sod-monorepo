import {NgTemplateOutlet} from '@angular/common';
import {Component, Input, TemplateRef} from '@angular/core';
import {PushPipe} from '@ngrx/component';
import {BehaviorSubject, Observable} from 'rxjs';
import {AnimatePipe} from '../../../animate/pipe/animate.pipe';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    standalone: true,
    imports: [NgTemplateOutlet, PushPipe, AnimatePipe],
})
export class ModalComponent {
    @Input({required: true}) content!: TemplateRef<any>;
    @Input() active$: BehaviorSubject<any> | Observable<any> = new BehaviorSubject(true);

    close(): void {
        if (this.active$ instanceof BehaviorSubject) {
            this.active$.next(false);
        }
    }
}
