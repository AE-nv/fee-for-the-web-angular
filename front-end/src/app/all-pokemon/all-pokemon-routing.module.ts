import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';

const routes: Routes = [
  { path: '', component: AllPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPokemonRoutingModule { }
