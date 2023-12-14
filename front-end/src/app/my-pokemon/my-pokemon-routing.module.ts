import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPokemonComponent } from './components/my-pokemon/my-pokemon.component';

const routes: Routes = [
  { path: '', component: MyPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPokemonRoutingModule { }
