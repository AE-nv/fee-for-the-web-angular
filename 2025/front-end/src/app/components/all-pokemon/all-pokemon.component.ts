import { Component } from '@angular/core';
import { Pokemon } from '../../shared/models/pokemon';
import { PokemonListComponent } from '../../shared/components/pokemon-list/pokemon-list.component';

@Component({
  selector: 'pokedex-all-pokemon',
  imports: [PokemonListComponent, ],
  templateUrl: './all-pokemon.component.html',
  styleUrl: './all-pokemon.component.scss'
})
export class AllPokemonComponent {
  allPokemon: Pokemon[] = [
    { name: "Bulbusaur", type: "grass" },
    { name: "Charmander", type: "fire" },
    { name: "Squirtle", type: "water" }
  ];

  pokemonCaught(pokemon: Pokemon) {
    console.log("Caught pokemon: ", pokemon);
  }
}
