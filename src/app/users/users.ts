export class Users {
    constructor (
    public name :string,
        public email: string,
        public password: string
){}
static readonly EMPTY_MODEL = {
    name: '',
    email: '',
    password: ''
};
}