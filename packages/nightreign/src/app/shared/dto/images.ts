import {groupBy, mapValues} from 'lodash-es';

export const relicImages = [
    {
        src: '/assets/relic2/19108.webp',
        alt: 'Grand Burning Scene 1',
        color: 'red',
    },
    {
        src: '/assets/relic2/19120.webp',
        alt: 'Grand Burning Scene 2',
        color: 'red',
    },
    {
        src: '/assets/relic2/19132.webp',
        alt: 'Grand Burning Scene 3',
        color: 'red',
    },
    {
        src: '/assets/relic2/19109.webp',
        alt: 'Grand Drizzly Scene 1',
        color: 'blue',
    },
    {
        src: '/assets/relic2/19121.webp',
        alt: 'Grand Drizzly Scene 2',
        color: 'blue',
    },
    {
        src: '/assets/relic2/19133.webp',
        alt: 'Grand Drizzly Scene 3',
        color: 'blue',
    },
    {
        src: '/assets/relic2/19110.webp',
        alt: 'Grand Luminous Scene 1',
        color: 'yellow',
    },
    {
        src: '/assets/relic2/19122.webp',
        alt: 'Grand Luminous Scene 2',
        color: 'yellow',
    },
    {
        src: '/assets/relic2/19134.webp',
        alt: 'Grand Luminous Scene 3',
        color: 'yellow',
    },
    {
        src: '/assets/relic2/19111.webp',
        alt: 'Grand Tranquil Scene 1',
        color: 'green',
    },
    {
        src: '/assets/relic2/19123.webp',
        alt: 'Grand Tranquil Scene 2',
        color: 'green',
    },
    {
        src: '/assets/relic2/19135.webp',
        alt: 'Grand Tranquil Scene 3',
        color: 'green',
    },
    {
        src: '/assets/relic2/19104.webp',
        alt: 'Polished Burning Scene 1',
        color: 'red',
    },
    {
        src: '/assets/relic2/19116.webp',
        alt: 'Polished Burning Scene 2',
        color: 'red',
    },
    {
        src: '/assets/relic2/19128.webp',
        alt: 'Polished Burning Scene 3',
        color: 'red',
    },
    {
        src: '/assets/relic2/19105.webp',
        alt: 'Polished Drizzly Scene 1',
        color: 'blue',
    },
    {
        src: '/assets/relic2/19117.webp',
        alt: 'Polished Drizzly Scene 2',
        color: 'blue',
    },
    {
        src: '/assets/relic2/19129.webp',
        alt: 'Polished Drizzly Scene 3',
        color: 'blue',
    },
    {
        src: '/assets/relic2/19106.webp',
        alt: 'Polished Luminous Scene 1',
        color: 'yellow',
    },
    {
        src: '/assets/relic2/19118.webp',
        alt: 'Polished Luminous Scene 2',
        color: 'yellow',
    },
    {
        src: '/assets/relic2/19130.webp',
        alt: 'Polished Luminous Scene 3',
        color: 'yellow',
    },
    {
        src: '/assets/relic2/19107.webp',
        alt: 'Polished Tranquil Scene 1',
        color: 'green',
    },
    {
        src: '/assets/relic2/19119.webp',
        alt: 'Polished Tranquil Scene 2',
        color: 'green',
    },
    {
        src: '/assets/relic2/19131.webp',
        alt: 'Polished Tranquil Scene 3',
        color: 'green',
    },
    {
        src: '/assets/relic2/19100.webp',
        alt: 'Delicate Burning Scene 1',
        color: 'red',
    },
    {
        src: '/assets/relic2/19112.webp',
        alt: 'Delicate Burning Scene 2',
        color: 'red',
    },
    {
        src: '/assets/relic2/19124.webp',
        alt: 'Delicate Burning Scene 3',
        color: 'red',
    },
    {
        src: '/assets/relic2/19101.webp',
        alt: 'Delicate Drizzly Scene 1',
        color: 'blue',
    },
    {
        src: '/assets/relic2/19113.webp',
        alt: 'Delicate Drizzly Scene 2',
        color: 'blue',
    },
    {
        src: '/assets/relic2/19125.webp',
        alt: 'Delicate Drizzly Scene 3',
        color: 'blue',
    },
    {
        src: '/assets/relic2/19102.webp',
        alt: 'Delicate Luminous Scene 1',
        color: 'yellow',
    },
    {
        src: '/assets/relic2/19114.webp',
        alt: 'Delicate Luminous Scene 2',
        color: 'yellow',
    },
    {
        src: '/assets/relic2/19126.webp',
        alt: 'Delicate Luminous Scene 3',
        color: 'yellow',
    },
    {
        src: '/assets/relic2/19103.webp',
        alt: 'Delicate Tranquil Scene 1',
        color: 'green',
    },
    {
        src: '/assets/relic2/19115.webp',
        alt: 'Delicate Tranquil Scene 2',
        color: 'green',
    },
    {
        src: '/assets/relic2/19127.webp',
        alt: 'Delicate Tranquil Scene 3',
        color: 'green',
    },
    {
        src: '/assets/relic/besmirched-frame.webp',
        alt: 'Besmirched Frame',
        color: 'blue',
    },
    {
        src: '/assets/relic/black-claw-necklace.webp',
        alt: 'Black Claw Necklace',
        color: 'yellow',
    },
    {
        src: '/assets/relic/blessed-flowers.webp',
        alt: 'Blessed Flowers',
        color: 'green',
    },
    {
        src: '/assets/relic/blessed-iron-coin.webp',
        alt: 'Blessed Iron Coin',
        color: 'green',
    },
    {
        src: '/assets/relic/bone-like-stone.webp',
        alt: 'Bone-Like Stone',
        color: 'green',
    },
    {
        src: '/assets/relic/cracked-sealing-wax.webp',
        alt: 'Cracked Sealing Wax',
        color: 'yellow',
    },
    {
        src: '/assets/relic/cracked-witchs-brooch.webp',
        alt: "Cracked Witch's Brooch",
        color: 'blue',
    },
    {
        src: '/assets/relic/crown-medal.webp',
        alt: 'Crown Medal',
        color: 'green',
    },
    {
        src: '/assets/relic/dark-night-of-the-baron.webp',
        alt: 'Dark Night of The Baron',
        color: 'red',
    },
    {
        src: '/assets/relic/night-of-the-beast.webp',
        alt: 'Dark Night of The Beast',
        color: 'yellow',
    },
    {
        src: '/assets/relic/night-of-the-champion.webp',
        alt: 'Dark Night of The Champion',
        color: 'yellow',
    },
    {
        src: '/assets/relic/night-of-the-demon.webp',
        alt: 'Dark Night of The Demon',
        color: 'blue',
    },
    {
        src: '/assets/relic/night-of-the-fathom.webp',
        alt: 'Dark Night of The Fathom',
        color: 'blue',
    },
    {
        src: '/assets/relic/night-of-the-miasma.webp',
        alt: 'Dark Night of The Miasma',
        color: 'green',
    },
    {
        src: '/assets/relic/night-of-the-wise.webp',
        alt: 'Dark Night of The Wise',
        color: 'green',
    },
    {
        src: '/assets/relic/edge-of-order.webp',
        alt: 'Edge of Order',
        color: 'yellow',
    },
    {
        src: '/assets/relic/fell-omen-fetish.webp',
        alt: 'Fell Omen Fetish',
        color: 'blue',
    },
    {
        src: '/assets/relic/golden-dew.webp',
        alt: 'Golden Dew',
        color: 'yellow',
    },
    {
        src: '/assets/relic/golden-sprout.webp',
        alt: 'Golden Sprout',
        color: 'red',
    },
    {
        src: '/assets/relic/night-of-the-baron.webp',
        alt: 'Night of the Baron',
        color: 'blue',
    },
    {
        src: '/assets/relic/night-of-the-beast.webp',
        alt: 'Night of the Beast',
        color: 'green',
    },
    {
        src: '/assets/relic/night-of-the-champion.webp',
        alt: 'Night of the Champion',
        color: 'green',
    },
    {
        src: '/assets/relic/night-of-the-demon.webp',
        alt: 'Night of the Demon',
        color: 'red',
    },
    {
        src: '/assets/relic/night-of-the-fathom.webp',
        alt: 'Night of the Fathom',
        color: 'red',
    },
    {
        src: '/assets/relic/night-of-the-lord.webp',
        alt: 'Night of the Lord',
        color: 'blue',
    },
    {
        src: '/assets/relic/night-of-the-miasma.webp',
        alt: 'Night of the Miasma',
        color: 'yellow',
    },
    {
        src: '/assets/relic/night-of-the-wise.webp',
        alt: 'Night of the Wise',
        color: 'yellow',
    },
    {
        src: '/assets/relic/old-pocketwatch.webp',
        alt: 'Old Pocketwatch',
        color: 'green',
    },
    {
        src: '/assets/relic/old-portrait.webp',
        alt: 'Old Portrait',
        color: 'blue',
    },
    {
        src: '/assets/relic/silver-tear.webp',
        alt: 'Silver Tear',
        color: 'red',
    },
    {
        src: '/assets/relic/slate-whetstone.webp',
        alt: 'Slate Whetstone',
        color: 'red',
    },
    {
        src: '/assets/relic/small-makeup-brush.webp',
        alt: 'Small Makeup Brush',
        color: 'blue',
    },
    {
        src: '/assets/relic/stone-stake.webp',
        alt: 'Stone Stake',
        color: 'red',
    },
    {
        src: '/assets/relic/the-wylders-earring.webp',
        alt: "The Wylder's Earring",
        color: 'red',
    },
    {
        src: '/assets/relic/third-volume.webp',
        alt: 'Third Volume',
        color: 'red',
    },
];

export const relicImagesByAlt = mapValues(groupBy(relicImages, 'alt'), (arr) => arr[0]);
export const relicImagesByColor = groupBy(relicImages, 'color');
export const relicImageFallback = '/assets/relic/scenic-flatstone.webp';
