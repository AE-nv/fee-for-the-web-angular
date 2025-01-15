import { Component, OnInit } from '@angular/core';
import { PokemonListComponent } from '../../shared/components/pokemon-list/pokemon-list.component';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'pokedex-all-pokemon',
  imports: [PokemonListComponent, ],
  templateUrl: './all-pokemon.component.html',
  styleUrl: './all-pokemon.component.scss'
})
export class AllPokemonComponent implements OnInit {
  allPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.allPokemon = this.pokemonService.getAllPokemon();
  }

  pokemonCaught(pokemon: Pokemon) {
    console.log("Caught pokemon: ", pokemon);
  }
}
