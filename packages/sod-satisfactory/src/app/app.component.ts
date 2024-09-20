import {AsyncPipe, DOCUMENT, NgClass, NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, effect, HostListener, Inject, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {PushPipe, RenderScheduler} from '@ngrx/component';
import {BehaviorSubject, filter} from 'rxjs';
import {ModalComponent} from 'src/app/shared/component/modal/modal.component';
import {SettingsService} from 'src/app/shared/service/settings-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [RenderScheduler],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterOutlet, NgTemplateOutlet, PushPipe, AsyncPipe, ModalComponent, NgClass],
})
export class AppComponent implements OnInit {
    @HostListener('window:keydown')
    handleKeyDown() {
        this.renderScheduler.schedule();
    }

    theme = this.settingsService.theme;
    hideItemNames = this.settingsService.hideItemNames;
    showSettings$ = new BehaviorSubject(false);

    constructor(
        private readonly router: Router,
        private readonly renderScheduler: RenderScheduler,
        private readonly settingsService: SettingsService,
        @Inject(DOCUMENT) private readonly document: Document,
    ) {
        effect(() => {
            this.document.documentElement.setAttribute('data-bs-theme', this.settingsService.theme());
        });
    }

    ngOnInit(): void {
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.renderScheduler.schedule());
    }
}
