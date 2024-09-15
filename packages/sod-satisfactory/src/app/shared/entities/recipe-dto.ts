import {itemPackageDtoSchema} from 'src/app/shared/entities/item-package-dto';
import {z} from 'zod';

export const recipeDtoSchema = z.object({
    producedIn: z.string(),
    inputs: z.array(itemPackageDtoSchema),
    outputs: z.array(itemPackageDtoSchema),
});

export type RecipeDto = z.infer<typeof recipeDtoSchema>;
export type RecipeTarget = 'inputs' | 'outputs';
