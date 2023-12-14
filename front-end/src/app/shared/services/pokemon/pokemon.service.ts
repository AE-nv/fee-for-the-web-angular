import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _baseUrl = environment.pokemonApiUrl;

  constructor(private _http: HttpClient) { }

  getAllPokemon(): Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>(`${this._baseUrl}/pokemon`);
  }
}
