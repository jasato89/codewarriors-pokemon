export class Trainer {

  constructor(
    private _name: string,
    private _birthDate: Date,
    private _hobby: string,
    private _pictureUrl: string,
    private _id?: number,
  ) { }


  get id(): number {
    return !this._id ? -1 : this._id;
  }

  get name(): string {
    return this._name;
  }
  get birthDate(): Date {
    return this._birthDate;
  }
  get hobby(): string {
    return this._hobby;
  }
  get pictureUrl(): string {
    return this._pictureUrl;
  }

  set id(id: number) {
    this._id = id;
  }

  set name(name: string) {
    this._name = name;
  }
  set birthDate(birthDate: Date) {
    this._birthDate = birthDate;
  }
  set hobby(hobby: string) {
    this._hobby = hobby;
  }

  set pictureUrl(pictureUrl: string) {
    this._pictureUrl = pictureUrl;
  }

}

