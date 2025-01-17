import { Routes } from '@angular/router';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { MyPokemonComponent } from './components/my-pokemon/my-pokemon.component';

export const routes: Routes = [
    { path: '', component: AllPokemonComponent },
    { path: 'mypokemon', component: MyPokemonComponent },
    { path: '**', component: AllPokemonComponent },
];
