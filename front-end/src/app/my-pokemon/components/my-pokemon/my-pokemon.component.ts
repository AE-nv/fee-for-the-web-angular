import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../../shared/models/pokemon';
import { MessageService } from '../../../shared/services/message/message.service';
import { PokemonService } from '../../../shared/services/pokemon/pokemon.service';

@Component({
  selector: 'pokedex-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.scss'
})
export class MyPokemonComponent implements OnInit {
  allPokemon$?: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.allPokemon$ = this.pokemonService.getAllPokemon();
  }

  pokemonReleased(pokemon: Pokemon) {
    this.messageService.showReleasedPokemonSuccess(pokemon);
  }
}
