import { PokemonDTO } from "../pokemon-dto/pokemon-dto";
import { Trainer } from "../trainer/trainer";

export class Team {
    constructor(
        private _trainer: Trainer,
        private _pokemon: PokemonDTO,
        private _id?: number
    ){}


    public get id(): number {
        return this._id === null? -1 : this.id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get pokemon(): PokemonDTO {
        return this._pokemon;
    }
    public set pokemon(value: PokemonDTO) {
        this._pokemon = value;
    }
    public get trainer(): Trainer {
        return this._trainer;
    }
    public set trainer(value: Trainer) {
        this._trainer = value;
    }
    
}
