import { Routes } from '@angular/router';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { MyPokemonComponent } from './components/my-pokemon/my-pokemon.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/all-pokemon' },
    { path: 'all-pokemon', component: AllPokemonComponent },
    { path: 'my-pokemon', component: MyPokemonComponent },
];
