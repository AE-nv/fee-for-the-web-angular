import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pokedex-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-pokedex';

  constructor(private _translateService: TranslateService) { }

  ngOnInit() {
    // this._translateService.setDefaultLang('en');
    this._translateService.use('nl');
  }
}
