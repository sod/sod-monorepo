import {readFile} from 'node:fs/promises';
import {extname, join} from 'node:path';
import {barcodeFilesDir} from '../tests/barcode/barcode-files';
import {expect, fixture, html} from '@open-wc/testing';

describe('MyElement', () => {
    it('has a default title "Hey there" and counter 5', async () => {
        const el = await fixture(html` <my-element></my-element> `);

        expect(el.title).to.equal('Hey there');
        expect(el.counter).to.equal(5);
    });
});

// describe('BarcodeScannerService', () => {
//     beforeEach(() => {});
//
//     async function getImage(filename: string): Promise<string> {
//         const contents = await readFile(join(barcodeFilesDir, filename));
//
//         return `data:image/${extname(filename)};base64,${contents.toString('base64')}`;
//     }
//
//     async function createImgTag(src: string): Promise<HTMLImageElement> {
//         const img = document.createElement('img');
//
//         return new Promise((resolve) => {
//             img.onload = () => resolve(img);
//             img.src = src;
//             resolve(img);
//         });
//     }
//
//     it('should read the image via canvas', async () => {
//         const page = await browser.newPage();
//         await page..type('#myinput', 'Hello');
//
//         // const canvas = document.getElementById('canvas');
//         // const ctx = canvas.getContext('2d');
//         //
//         // canvas.width = img.width;
//         // canvas.height = img.height;
//         // ctx.drawImage(img, 0, 0);
//         //
//         // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//         // const pixels = imageData.data;
//         // const rgbValues = [];
//         //
//         // for (let i = 0; i < pixels.length; i += 4) {
//         //     const r = pixels[i];
//         //     const g = pixels[i + 1];
//         //     const b = pixels[i + 2];
//         //     rgbValues.push([r, g, b]);
//         // }
//         //
//         // console.log(rgbValues);
//
//         const src = await getImage('wiki-perfect-ean13.png');
//         const img = await createImgTag(src);
//         console.log(img.width);
//
//         console.log(img);
//     });
// });
