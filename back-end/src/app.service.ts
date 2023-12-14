import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { pokemon as pokemonList } from './data/pokemon.js'
import { Pokemon } from './models/pokemon.js';

@Injectable()
export class AppService {

  pokemon: Pokemon[] = pokemonList;

  getAllPokemon(): Pokemon[] {
    return this.pokemon
  }

  getCaughtPokemon(): Pokemon[] {
    return this.pokemon.filter(p => p.caught)
  }
  updatePokemonCaughtStatus(id: number, caught: boolean): Pokemon {
    let pokemon: Pokemon = this.pokemon.find((p) => p.id == id);

    if (pokemon === undefined) {
      throw new HttpException(`Pokemon with ID: ${id} not found`, HttpStatus.NOT_FOUND)
    }

    pokemon.caught = caught;
    return pokemon;
  }
}
