import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getStatic();
    this.getPlus();
  }

  getPokemon() {
    let ampharos = this._http.get("https://pokeapi.co/api/v2/pokemon/181/");

    ampharos.subscribe(data =>
      console.log(
        "Got dat Ampharos!",
        data,
        "Ampharos has a height of " +
          data.height +
          " and has the abilities: " +
          data.abilities[0].ability.name +
          " and " +
          data.abilities[1].ability.name
      )
    );
    return ampharos;
  }

  getStatic() {
    let test = this._http.get("https://pokeapi.co/api/v2/ability/static/");

    test.subscribe(data => {
      let list = [];
      data.pokemon.forEach(element => {
        list.push(element.pokemon.name);
      });
      console.log(list.length + " pokemon share the ability static!");
    });
  }

  getPlus() {
    let test = this._http.get("https://pokeapi.co/api/v2/ability/plus/");

    test.subscribe(data => {
      let list = [];
      data.pokemon.forEach(element => {
        list.push(element.pokemon.name);
      });
      console.log(list.length + " pokemon share the ability plus!");
    });
  }
}
