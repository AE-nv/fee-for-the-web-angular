import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { EMPTY, Observable, catchError, map, tap } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _baseUrl = environment.pokemonApiUrl;

  constructor(private _http: HttpClient, private _messageService: MessageService) { }

  getAllPokemon(): Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>(`${this._baseUrl}/pokemon`).pipe(catchError((err) => {
      this._messageService.showApiError(err);
      return EMPTY;
    }));
  }

  getMyPokemon(): Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>(`${this._baseUrl}/pokemon/caught`).pipe(catchError((err) => {
      this._messageService.showApiError(err);
      return EMPTY;
    }));
  }

  catchPokemon(id: number): Observable<Pokemon> {
    return this._http.post<Pokemon>(`${this._baseUrl}/pokemon/${id}/catch`, undefined).pipe(
      tap(this._messageService.showCaughtPokemonSuccess),
      catchError((err) => {
        this._messageService.showApiError(err);
        return EMPTY;
      }));
  }

  releasePokemon(id: number): Observable<Pokemon> {
    return this._http.post<Pokemon>(`${this._baseUrl}/pokemon/${id}/release`, undefined).pipe(
      tap(this._messageService.showReleasedPokemonSuccess),
      catchError((err) => {
        this._messageService.showApiError(err);
        return EMPTY;
      }));
  }
}
