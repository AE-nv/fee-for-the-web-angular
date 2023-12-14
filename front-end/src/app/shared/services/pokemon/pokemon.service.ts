import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { EMPTY, Observable, catchError } from 'rxjs';
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
}
