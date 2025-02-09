import {recipeDtoSchema} from 'src/app/shared/entities/recipe-dto';
import {z} from 'zod';

export const productionDtoSchema = z.object({
    recipe: recipeDtoSchema,
    uuid: z.string().optional(),
    clockSpeed1: z.number().optional(),
    clockSpeed2: z.number().optional(),
    somersloop: z.boolean().optional(),
    machines: z.number().optional(),
    built: z.boolean().optional(),
});

export type ProductionDto = z.infer<typeof productionDtoSchema>;
