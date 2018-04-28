export class RecipeIngredients {
    constructor(
        public name: string,
        public quantity: number,
        public measurement: string,
        public calories: number,
        public notes: string
    ) {}
    static readonly EMPTY_MODEL = {
        name: '',
        quantity: 0,
        measurement: '',
        calories: 0,
        notes: ''
     };
}
