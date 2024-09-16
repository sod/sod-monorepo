import {Injectable} from '@angular/core';

const matchesFuzzyDefault = (value: any): string => String(value);
const matchesPerfectDefault = (value: any): string[] => [String(value)];

@Injectable({providedIn: 'root'})
export class SearchService {
    search<T>(
        needle: unknown,
        haystack: T[],
        {
            matchesFuzzy = matchesFuzzyDefault,
            matchesPerfect = matchesPerfectDefault,
            limit = 15,
        }: {
            matchesFuzzy?: (value: T) => string;
            matchesPerfect?: (value: T) => string[];
            limit?: number;
        } = {},
    ): T[] {
        let needles: string[] | undefined;
        let perfectNeedle: string | undefined;

        if (needle && typeof needle === 'string') {
            perfectNeedle = needle.toLowerCase();
            needles = perfectNeedle.trim().split(/ +/);
        }

        if (needles && perfectNeedle) {
            const perfectNeedleResult = haystack
                .filter((option) => {
                    return matchesPerfect(option)
                        .map((x) => `${x?.toLowerCase?.() || ''}`)
                        .includes(perfectNeedle!);
                })
                .slice(0, limit);

            if (perfectNeedleResult.length) {
                return perfectNeedleResult;
            }

            return haystack
                .filter((option) => {
                    const hay = matchesFuzzy(option).toLowerCase();
                    return needles!.every((needle) => hay.indexOf(needle) !== -1);
                })
                .slice(0, limit);
        }

        return haystack.slice(0, limit);
    }
}
