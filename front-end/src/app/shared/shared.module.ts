import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    PokemonListComponent,
    TranslateModule
  ]
})
export class SharedModule { }
