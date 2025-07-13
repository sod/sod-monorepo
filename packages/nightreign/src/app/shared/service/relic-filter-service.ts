import {inject, Injectable} from '@angular/core';
import {RelicsStore} from '@sod/nightreign/src/app/shared/dto/relic-dto';
import {SearchService} from '@sod/sdk/src/lib/service/search-service';

const escapeRegex = (value: string) => (RegExp as any).escape(value);

@Injectable({providedIn: 'root'})
export class RelicFilterService {
    searchService = inject(SearchService);

    filter(relics: RelicsStore, queries: string[]): RelicsStore {
        const search = queries.map((query) => (haystack: string[]) => this.searchService.search(query, haystack));
        const matches: RelicsStore[] = [];

        for (const relic of relics) {
            const count = new Set(search.flatMap((inner) => inner(relic.properties))).size;

            if (!count) {
                continue;
            }

            while (!matches[count]) {
                matches.push([]);
            }

            matches[count].push(relic);
        }

        return matches.reverse().flat();
    }

    highlight(needles?: string[]): (haystack: string) => {value: string; class: string}[] {
        if (!needles?.length) {
            return (value: string) => [{value, class: ''}];
        }

        const needlesRegex = new RegExp(`(${needles.map((needle) => escapeRegex(needle)).join('|')})\\s*`, 'ig');

        return (haystack: string) => {
            let head: {value: string; class: string} | undefined = undefined;
            const stack: {value: string; class: string}[] = [];
            const consume = (value: string, css: string) => {
                if (head && head.class === css) {
                    head.value += value;
                } else {
                    stack.push((head = {value, class: css}));
                }
            };
            let next;
            let pos = 0;

            while ((next = needlesRegex.exec(haystack))) {
                if (next.index > pos) {
                    consume(haystack.slice(pos, next.index), 'text-gray-600');
                }

                consume(next[0], 'text-white');
                pos = next.index + next[0].length;
            }

            if (pos < haystack.length) {
                consume(haystack.slice(pos, haystack.length), 'text-gray-600');
            }

            return stack;
        };
    }
}
