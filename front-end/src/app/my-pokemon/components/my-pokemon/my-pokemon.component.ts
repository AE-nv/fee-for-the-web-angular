import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonService } from '../../../shared/services/pokemon/pokemon.service';

@Component({
  selector: 'pokedex-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.scss'
})
export class MyPokemonComponent implements OnInit {
  allPokemon$?: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.allPokemon$ = this.pokemonService.getAllPokemon();
  }

  releasePokemon(pokemon: Pokemon) {
    this.pokemonService.releasePokemon(pokemon.id);
  }
}
