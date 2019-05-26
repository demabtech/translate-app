import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translate-app';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }
 
  setLanguage(language: string) {
    this.translate.use(language);
  }
}
