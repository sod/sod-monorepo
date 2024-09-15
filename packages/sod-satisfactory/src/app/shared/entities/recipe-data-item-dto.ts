export interface RecipeDataItemDto {
    itemName: string;
    amount: number;
}

export interface RecipeDataDto {
    name: string;
    producedIn: string;
    inputs?: RecipeDataItemDto[];
    outputs?: RecipeDataItemDto[];
}
