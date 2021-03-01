export class Trainer {
    
    constructor(
        private _name: string,
        private _age: number,
        private _hobby: string,
        private _photo: string = '',
        private _isCreated: boolean

      ){}
    
      get name(): string {
        return this._name;
      }
      get age(): number {
        return this._age;
      }
      get hobby(): string {
        return this._hobby;
      }
      get photo(): string {
        return this._photo;
      }

      get isCreated():boolean{
        return this._isCreated;
    }
    
      set name(name: string) {
        this._name = name;
      }
      set age(age: number) {
        this._age = age;
      }
      set hobby(hobby: string) {
        this._hobby = hobby;
      }
    
      set photo(photo: string) {
        this._photo = photo;
      }   
      
      set isCreated(isCreated:boolean){
        this._isCreated = isCreated;
    }
}
