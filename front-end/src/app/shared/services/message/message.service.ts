import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pokemon } from '../../models/pokemon';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _toastr: ToastrService) { }

  showApiError(error: HttpErrorResponse) {
    this._toastr.error(error.message, 'API Error', {
      timeOut: 3000,
    });
  }

  showCaughtPokemonSuccess(pokemon: Pokemon) {
    this._toastr.success(pokemon.description, `Caught ${pokemon.name}!`, {
      timeOut: 5000,
    });
  }
}
