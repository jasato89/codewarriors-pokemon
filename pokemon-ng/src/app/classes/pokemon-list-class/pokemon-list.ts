export class PokemonList {
  constructor(
    private _next:string,
    private _previous: string,
    private _results: [{
      name:string,
      url:string
    }]
  ) {
  }


  get next(): string {
    return this._next;
  }

  set next(value: string) {
    this._next = value;
  }

  get previous(): string {
    return this._previous;
  }

  set previous(value: string) {
    this._previous = value;
  }


  get results(): [{ name: string; url: string }] {
    return this._results;
  }

  set results(value: [{ name: string; url: string }]) {
    this._results = value;
  }
}
