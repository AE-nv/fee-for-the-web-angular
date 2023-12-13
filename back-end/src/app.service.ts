import { Injectable } from '@nestjs/common';
import pokemonList from './data/pokemon.json'
@Injectable()
export class AppService {
  getAllPokemon(): Pokemon[] {
    return pokemonList
  }
}
