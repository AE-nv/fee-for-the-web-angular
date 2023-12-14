import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonService } from '../../../shared/services/pokemon/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pokedex-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrl: './all-pokemon.component.scss'
})
export class AllPokemonComponent implements OnInit {
  allPokemon$?: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.allPokemon$ = this.pokemonService.getAllPokemon();
  }

  catchPokemon(pokemon: Pokemon) {
    this.pokemonService.catchPokemon(pokemon.id);
  }
}
