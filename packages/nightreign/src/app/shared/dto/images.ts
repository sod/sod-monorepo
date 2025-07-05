import {groupBy, mapValues} from 'lodash-es';

export const relicImages = [
    {
        src: '/assets/relic/grand-burning-scene.webp',
        alt: 'Grand Burning Scene',
        color: 'red',
    },
    {
        src: '/assets/relic/grand-drizzly-scene.webp',
        alt: 'Grand Drizzly Scene',
        color: 'blue',
    },
    {
        src: '/assets/relic/grand-luminous-scene.webp',
        alt: 'Grand Luminous Scene',
        color: 'yellow',
    },
    {
        src: '/assets/relic/grand-tranquil-scene.webp',
        alt: 'Grand Tranquil Scene',
        color: 'green',
    },
    {
        src: '/assets/relic/polished-burning-scene.webp',
        alt: 'Polished Burning Scene',
        color: 'red',
    },
    {
        src: '/assets/relic/polished-drizzly-scene.webp',
        alt: 'Polished Drizzly Scene',
        color: 'blue',
    },
    {
        src: '/assets/relic/polished-luminous-scene.webp',
        alt: 'Polished Luminous Scene',
        color: 'yellow',
    },
    {
        src: '/assets/relic/polished-tranquil-scene.webp',
        alt: 'Polished Tranquil Scene',
        color: 'green',
    },
    {
        src: '/assets/relic/delicate-burning-scene.webp',
        alt: 'Delicate Burning Scene',
        color: 'red',
    },
    {
        src: '/assets/relic/delicate-drizzly-scene.webp',
        alt: 'Delicate Drizzly Scene',
        color: 'blue',
    },
    {
        src: '/assets/relic/delicate-luminous-scene.webp',
        alt: 'Delicate Luminous Scene',
        color: 'yellow',
    },
    {
        src: '/assets/relic/delicate-tranquil-scene.webp',
        alt: 'Delicate Tranquil Scene',
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
