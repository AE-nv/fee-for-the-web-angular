import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  allPokemon: Pokemon[] = [
    { name: "Bulbusaur", type: "grass" },
    { name: "Charmander", type: "fire" },
    { name: "Squirtle", type: "water" }
  ];

  getAllPokemon(): Pokemon[] {
    return this.allPokemon;
  }
}
