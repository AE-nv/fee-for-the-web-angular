import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPokemonRoutingModule } from './my-pokemon-routing.module';
import { MyPokemonComponent } from './components/my-pokemon/my-pokemon.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MyPokemonComponent
  ],
  imports: [
    CommonModule,
    MyPokemonRoutingModule,
    SharedModule
  ],
  exports: [
    MyPokemonComponent
  ]
})
export class MyPokemonModule { }
