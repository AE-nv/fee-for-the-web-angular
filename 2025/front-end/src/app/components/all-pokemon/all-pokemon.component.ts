import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../app/shared/models/pokemon';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Observable } from 'rxjs';
import { MessageService } from '../../shared/services/message/message.service';
import { PokemonListComponent } from '../../shared/components/pokemon-list/pokemon-list.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'pokedex-all-pokemon',
  imports: [PokemonListComponent, AsyncPipe],
  templateUrl: './all-pokemon.component.html',
  styleUrl: './all-pokemon.component.scss'
})
export class AllPokemonComponent implements OnInit {
  allPokemon$?: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.allPokemon$ = this.pokemonService.getAllPokemon();
  }

  pokemonCaught(pokemon: Pokemon) {
    this.messageService.showCaughtPokemonSuccess(pokemon);
  }
}
