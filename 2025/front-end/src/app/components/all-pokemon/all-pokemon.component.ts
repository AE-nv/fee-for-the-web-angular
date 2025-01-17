import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../app/shared/models/pokemon';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonListComponent } from '../../shared/components/pokemon-list/pokemon-list.component';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'pokedex-all-pokemon',
  imports: [PokemonListComponent, AsyncPipe, CommonModule],
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
    this.pokemonService.catchPokemon(pokemon.id).subscribe();
  }
}
