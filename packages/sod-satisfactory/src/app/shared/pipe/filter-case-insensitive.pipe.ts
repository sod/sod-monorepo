import {Pipe, PipeTransform} from '@angular/core';
import {SearchService} from 'src/app/shared/service/search-service';

@Pipe({
    name: 'filterCaseInsensitive',
    standalone: true,
})
export class FilterCaseInsensitivePipe implements PipeTransform {
    constructor(private searchService: SearchService) {}

    transform<T>(
        haystack: T[],
        needle: unknown,
        matchesFuzzy: (value: T) => string = (value) => String(value),
        matchesPerfect: (value: T) => string[] = (value) => [String(value)],
    ): T[] {
        return this.searchService.search(needle, haystack, {matchesFuzzy, matchesPerfect});
    }
}
