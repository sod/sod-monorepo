import {inject, Injectable} from '@angular/core';
import {RelicsStore} from '@sod/nightreign/src/app/shared/dto/relic-dto';
import {RelicViewDto} from '@sod/nightreign/src/app/shared/dto/relic-view-dto';
import {SearchService} from '@sod/sdk/src/lib/service/search-service';

@Injectable({providedIn: 'root'})
export class RelicFilterService {
    searchService = inject(SearchService);

    filter(relics: RelicsStore, relicView: RelicViewDto): RelicsStore {
        const search = relicView.queries.map((query) => (haystack: string[]) => this.searchService.search(query, haystack));
        const count = relicView.count;

        return relics.filter((relic) => {
            return new Set(search.flatMap((inner) => inner(relic.properties))).size >= count;
        });
    }
}
