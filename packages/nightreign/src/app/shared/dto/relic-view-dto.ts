import {getNewUuid} from '@sod/sdk/src/lib/function/uuid';
import {z} from 'zod';

export const RelicViewFilterSchema = z.object({
    uuid: z.string(),
});

export const RelicViewSchema = z.object({
    uuid: z.string(),
    name: z.string(),
    count: z.number(),
    queries: z.array(z.string()),
});

export const RelicsViewStoreSchema = z.array(RelicViewSchema);

export type RelicViewDto = z.infer<typeof RelicViewSchema>;
export type RelicViewFilterDto = z.infer<typeof RelicViewFilterSchema>;

export const createNewRelicView = (): RelicViewDto => ({uuid: getNewUuid(), name: '', count: 1, queries: []});
