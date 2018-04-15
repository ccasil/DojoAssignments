import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon() {
    const porygon = this._http.get('https://pokeapi.co/api/v2/pokemon/137/');
    porygon.subscribe(data => {
      console.log('Got our pokemon!', data);
      console.log('Porygon\'s abilities are ', data.abilities[0].ability.name data.abilities[1].ability.name data.abilities[2].ability.name);
      console.log('Porygon\'s type is', data.types[0].type.name);

      const analytic = this._http.get(data.abilities[0].ability.url);
      analytic.subscribe(data => {
      console.log('Got our pokemon!', data);
      console.log('Number of Pokemon who can use Analytic: ', data.pokemon.length);
      for (var i = 0; i < data.pokemon.length; i++){
        console.log(data.pokemon[i].pokemon.name);
      }
      });
    });
  }
}
