import { Injectable } from '@angular/core';
import { Pokemon } from '../../shared/models/pokemon';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, take, tap } from 'rxjs';
import { environment } from '../../../assets/environments/environment.development';
import { MessageService } from '../services/message/message.service';

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
      tap((pokemon) => this._messageService.showReleasedPokemonSuccess(pokemon)),
      catchError((err) => {
        this._messageService.showApiError(err);
        return EMPTY;
      }));
  }
}
