import { Component } from '@angular/core';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';

@Component({
  selector: 'app-root',
  imports: [AllPokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-end';
}
