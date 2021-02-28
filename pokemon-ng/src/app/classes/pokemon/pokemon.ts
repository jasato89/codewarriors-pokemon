import {Pokeinterface} from "../../interfaces/pokeinterface";

export class Pokemon {

  constructor(private _id: number, private _name: string, private _abilities: number[], private _type: string[], private _sprites: string[]) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get abilities(): number[] {
    return this._abilities;
  }

  set abilities(value: number[]) {
    this._abilities = value;
  }

  get type(): string[] {
    return this._type;
  }

  set type(value: string[]) {
    this._type = value;
  }

  get sprites(): string[] {
    return this._sprites;
  }

  set sprites(value: string[]) {
    this._sprites = value;
  }
}
