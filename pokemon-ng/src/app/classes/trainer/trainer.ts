import { PokemonList } from './../pokemon-list-class/pokemon-list';
export class Trainer {
    
    constructor(

        private _id:number,
        private _name: string,
        private _birthDate: string,
        private _hobby: string,
        private _pictureUrl: string = '',

      ){}

      get id():number{
        return this._id;
    }
    
      get name(): string {
        return this._name;
      }
      get birthDate(): string {
        return this._birthDate;
      }
      get hobby(): string {
        return this._hobby;
      }
      get pictureUrl(): string {
        return this._pictureUrl;
      }

      set id(id:number){
          this._id = id;
      }
    
      set name(name: string) {
        this._name = name;
      }
      set birthDate(birthDate: string) {
        this._birthDate = birthDate;
      }
      set hobby(hobby: string) {
        this._hobby = hobby;
      }
    
      set pictureUrl(pictureUrl: string) {
        this._pictureUrl = pictureUrl;
      }  
      
}
