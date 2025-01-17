import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/all-pokemon'
  },
  {
    path: 'all-pokemon',
    loadChildren: () => import('./all-pokemon/all-pokemon.module').then(m => m.AllPokemonModule)
  },
  {
    path: 'my-pokemon',
    loadChildren: () => import('./my-pokemon/my-pokemon.module').then(m => m.MyPokemonModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
