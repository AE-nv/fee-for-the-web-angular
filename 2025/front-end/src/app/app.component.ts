import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AllPokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-end';
}
