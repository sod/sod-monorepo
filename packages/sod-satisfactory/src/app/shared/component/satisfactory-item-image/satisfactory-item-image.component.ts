import {Component, Input} from '@angular/core';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {SatisfactoriyItemImagePipe} from 'src/app/shared/pipe/satisfactoriy-item-image.pipe';

@Component({
    selector: 'app-satisfactory-item-image',
    templateUrl: './satisfactory-item-image.component.html',
    styleUrls: ['./satisfactory-item-image.component.scss'],
    standalone: true,
    imports: [SatisfactoriyItemImagePipe],
})
export class SatisfactoryItemImageComponent {
    @Input() itemPackage!: Pick<ItemPackage, 'itemName'>;
    @Input() heightPercent = 100;
}
