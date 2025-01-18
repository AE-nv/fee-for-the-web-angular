import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'pokedex-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
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
