import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pokedex-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private _translate: TranslateService) { }

  get otherLanguage(): string {
    return this._translate.currentLang === 'en' ? 'nl' : 'en';
  }

  toggleLanguage() {
    this._translate.use(this.otherLanguage);
  }
}
