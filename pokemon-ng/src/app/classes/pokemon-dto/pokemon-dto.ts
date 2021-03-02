export class PokemonDTO {

    constructor(
        private _id: number,
        private _pokemonId: number,
        private _name: string,
        private _height: number,
        private _weight: number,
        private _baseExperience: number,
        private _abilities: string,
        private _speciesName: string,
        private _pictureFrontHq: string,
        private _pictureFront: string,
        private _pictureBack: string,
        private __heldItemsQty: number,
        private _stats: string,
        private _types: string
    ) { }

    public get types(): string {
        return this._types;
    }
    public set types(value: string) {
        this._types = value;
    }
    public get stats(): string {
        return this._stats;
    }
    public set stats(value: string) {
        this._stats = value;
    }
    public get _heldItemsQty(): number {
        return this.__heldItemsQty;
    }
    public set _heldItemsQty(value: number) {
        this.__heldItemsQty = value;
    }
    public get pictureBack(): string {
        return this._pictureBack;
    }
    public set pictureBack(value: string) {
        this._pictureBack = value;
    }
    public get pictureFront(): string {
        return this._pictureFront;
    }
    public set pictureFront(value: string) {
        this._pictureFront = value;
    }
    public get pictureFrontHq(): string {
        return this._pictureFrontHq;
    }
    public set pictureFrontHq(value: string) {
        this._pictureFrontHq = value;
    }
    public get speciesName(): string {
        return this._speciesName;
    }
    public set speciesName(value: string) {
        this._speciesName = value;
    }
    public get abilities(): string {
        return this._abilities;
    }
    public set abilities(value: string) {
        this._abilities = value;
    }
    public get baseExperience(): number {
        return this._baseExperience;
    }
    public set baseExperience(value: number) {
        this._baseExperience = value;
    }
    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get pokemonId(): number {
        return this._pokemonId;
    }
    public set pokemonId(value: number) {
        this._pokemonId = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }



}
