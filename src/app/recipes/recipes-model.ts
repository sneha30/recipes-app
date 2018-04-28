import { RecipeIngredients } from './recipe-ingredients';

export class RecipesModel {
    constructor(
        public recipe_id: number,
        public name: string,
        public cuisine: string,
        public prep_time: number,
        public cook_time: number,
        public calories: number,
        public prep_instructions: string,
        public instructions: string,
        public author: string,
        public created_date: string,
        public tags: string,
        public ingredients: [RecipeIngredients]
    ) {}
    static readonly EMPTY_MODEL = {
        recipe_id: 0,
        name: '',
        cuisine: '',
        prep_time: 0,
        cook_time: 0,
        calories: 0,
        prep_instructions: '',
        instructions: '',
        author: '',
        created_date: '',
        tags: '',
        ingredients: [RecipeIngredients.EMPTY_MODEL]
     };
}
