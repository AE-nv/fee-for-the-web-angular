import { Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Pokemon } from './models/pokemon';

@Controller("pokemon")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getAllPokemon(): Pokemon[] {
    return this.appService.getAllPokemon();
  }

  @Get('/caught')
  getCaughtPokemon(): Pokemon[] {
    return this.appService.getCaughtPokemon();
  }

  @Post(':id/catch')
  @HttpCode(200)
  catchPokemon(@Param('id') id: number): Pokemon {
    return this.appService.updatePokemonCaughtStatus(id, true);
  }

  @Post(':id/release')
  @HttpCode(200)
  releasePokemon(@Param('id') id: number): Pokemon {
    return this.appService.updatePokemonCaughtStatus(id, false);
  }
}

