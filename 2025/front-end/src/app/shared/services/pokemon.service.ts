import { Injectable } from '@angular/core';
import { Pokemon } from '../../shared/models/pokemon';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD:front-end/src/app/shared/services/pokemon/pokemon.service.ts
import { environment } from '../../../../environments/environment.development';
import { EMPTY, Observable, catchError, map, take, tap } from 'rxjs';
import { MessageService } from '../message/message.service';
=======
import { environment } from '../../../assets/environments/environment.development';
import { EMPTY, Observable, catchError } from 'rxjs';
import { MessageService } from '../services/message/message.service';
>>>>>>> calling-apis:2025/front-end/src/app/shared/services/pokemon.service.ts

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _baseUrl = environment.pokemonApiUrl;

  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getAllPokemon(): Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>(`${this._baseUrl}/pokemon`).pipe(
      take(1),
      catchError((err) => {
        this._messageService.showApiError(err);
        return EMPTY;
      }));
  }

  getMyPokemon(): Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>(`${this._baseUrl}/pokemon/caught`).pipe(
      take(1),
      catchError((err) => {
        this._messageService.showApiError(err);
        return EMPTY;
      }));
  }

  catchPokemon(id: number): Observable<Pokemon> {
    return this._http.post<Pokemon>(`${this._baseUrl}/pokemon/${id}/catch`, undefined).pipe(
      take(1),
      tap((pokemon) => this._messageService.showCaughtPokemonSuccess(pokemon)),
      catchError((err) => {
        this._messageService.showApiError(err);
        return EMPTY;
      }));
  }

  releasePokemon(id: number): Observable<Pokemon> {
    return this._http.post<Pokemon>(`${this._baseUrl}/pokemon/${id}/release`, undefined).pipe(
      take(1),
      tap((pokemon) => this._messageService.showCaughtPokemonSuccess(pokemon)),
      catchError((err) => {
        this._messageService.showApiError(err);
        return EMPTY;
      }));
  }
}
