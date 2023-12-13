import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPokemonRoutingModule } from './all-pokemon-routing.module';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AllPokemonComponent
  ],
  imports: [
    CommonModule,
    AllPokemonRoutingModule,
    SharedModule
  ],
  exports: [
    AllPokemonComponent
  ]
})
export class AllPokemonModule { }
