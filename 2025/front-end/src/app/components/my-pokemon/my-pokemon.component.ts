import { Component } from '@angular/core';
import { Pokemon } from '../../shared/models/pokemon';
import { Observable } from 'rxjs';
import { PokemonService } from '../../shared/services/pokemon.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { PokemonListComponent } from "../../shared/components/pokemon-list/pokemon-list.component";

@Component({
  selector: 'pokedex-my-pokemon',
  imports: [NgIf, PokemonListComponent, AsyncPipe],
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.scss'
})
export class MyPokemonComponent {
  myPokemon$?: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.myPokemon$ = this.pokemonService.getMyPokemon();
  }

  releasePokemon(pokemon: Pokemon) {
    this.pokemonService.releasePokemon(pokemon.id).subscribe();
  }
}
