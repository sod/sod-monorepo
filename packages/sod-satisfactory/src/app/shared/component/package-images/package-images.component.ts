import {Component, Input} from '@angular/core';
import {ItemPackage} from '../../entities/item-package';
import {SatisfactoryItemImageComponent} from '../satisfactory-item-image/satisfactory-item-image.component';

@Component({
    selector: 'app-package-images',
    templateUrl: './package-images.component.html',
    styleUrls: ['./package-images.component.scss'],
    standalone: true,
    imports: [SatisfactoryItemImageComponent],
})
export class PackageImagesComponent {
    @Input() items!: Pick<ItemPackage, 'itemName' | 'amount'>[];
}
