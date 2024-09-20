import {Injectable} from '@angular/core';
import {LocalStorageService} from 'src/app/shared/service/local-storage-service';
import {z} from 'zod';

export const ThemeSchema = z.enum(['dark', 'light']);
export const HideItemNamesSchema = z.boolean();

@Injectable({providedIn: 'root'})
export class SettingsService {
    theme = this.localStorageService.getStrictStore('theme', ThemeSchema, () => 'dark');
    hideItemNames = this.localStorageService.getStrictStore('hideItemNames', HideItemNamesSchema, () => false);

    constructor(private readonly localStorageService: LocalStorageService) {}
}
