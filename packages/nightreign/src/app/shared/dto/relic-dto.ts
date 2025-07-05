import {getNewUuid} from '@sod/sdk/src/lib/function/uuid';
import {z} from 'zod';

export const RelicColorDtoSchema = z.union([z.literal('green'), z.literal('red'), z.literal('yellow'), z.literal('blue')]);
export const relicColors = ['green', 'red', 'yellow', 'blue'] as const;

export const RelicPropertyDtoSchema = z.string();

export const RelicDtoSchema = z.object({
    uuid: z.string(),
    color: RelicColorDtoSchema,
    image: z.string().optional(),
    properties: z.array(RelicPropertyDtoSchema),
});

export const RelicsStoreSchema = z.array(RelicDtoSchema);

export type RelicColorDto = z.infer<typeof RelicColorDtoSchema>;
export type RelicPropertyDto = z.infer<typeof RelicPropertyDtoSchema>;
export type RelicDto = z.infer<typeof RelicDtoSchema>;
export type RelicsStore = z.infer<typeof RelicsStoreSchema>;

export const createNewRelic = (color: RelicColorDto): RelicDto => ({uuid: getNewUuid(), color, properties: []});
