import { Injectable } from '@angular/core';
// services
import { TranslateService } from '@ngx-translate/core';
// languages
import { locale as esLang } from '../../config/i18n/es';
import { locale as enLang } from '../../config/i18n/en';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public activeLang = 'es';

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService
  ) {
    this.translate.setTranslation(esLang.lang, esLang.data, true);
    this.translate.setTranslation(enLang.lang, enLang.data, true);
    this.translate.addLangs([esLang.lang, enLang.lang]);
  }

  public init() {
    this.activeLang = this.activeLang;
    this.translate.setDefaultLang(this.activeLang);
    this.translate.use(this.activeLang);
  }

  public setLanguage(lang: string) {
    this.activeLang = lang.toLowerCase();
    this.translate.use(lang.toLowerCase());
    this.localStorage.store('languaje', lang.toLowerCase());
  }

  public refreshLang() {
    this.activeLang = this.localStorage.retrieve('languaje');
    this.init();
  }

  public getLanguajeFromCountry(country: string): string {
    switch (country) {
      case 'AR':
        return 'es';
      case 'ES':
        return 'es';
      case 'BR':
        return 'en';
      case 'IT':
        return 'en';
      case 'US':
        return 'en';
      default:
        return 'es';
    }
  }

}
