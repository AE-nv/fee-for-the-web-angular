import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { HttpClient } from '@angular/common/http';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'pokedex-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-end';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['nl', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
}
}
