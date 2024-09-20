import {computed, Pipe, PipeTransform, Signal} from '@angular/core';
import {SettingsService, ThemeSchema} from 'src/app/shared/service/settings-service';
import {z} from 'zod';

const x: z.infer<typeof ThemeSchema> = 'dark';

@Pipe({
    name: 'isTheme',
    standalone: true,
    pure: true,
})
export class IsThemePipe implements PipeTransform {
    transform(theme: z.infer<typeof ThemeSchema>): Signal<boolean> {
        return computed(() => this.settingsService.theme() === theme);
    }

    constructor(private settingsService: SettingsService) {
    }
}
