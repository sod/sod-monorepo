import {Pipe, PipeTransform} from '@angular/core';
import {relicImageFallback, relicImagesByAlt} from '@sod/nightreign/src/app/shared/dto/images';
import {trimEnd, trimStart} from 'lodash-es';

@Pipe({
    name: 'relicImage',
    standalone: true,
})
export class RelicImagePipe implements PipeTransform {
    transform(value?: string): string | undefined {
        value = relicImagesByAlt[value!]?.src ?? value ?? relicImageFallback;

        const baseUrl = document.location.origin + document.location.pathname;

        return trimEnd(baseUrl, '/') + '/' + trimStart(value, '/');
    }
}
