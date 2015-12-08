import {App, IonicApp, Config, Platform} from 'ionic/ionic';

import {About} from './about/about';
import {Home} from './home/home';
import {Settings} from './settings/settings';
import {DataService} from './service/data';

import './app.scss';

@App({
  templateUrl: 'app/app.html',
  config: {
    tabbarPlacement: 'bottom',
    mode: 'md'
  },
  providers: [DataService]
})
export class MyApp {
  constructor(platform:Platform, dataService:DataService) {

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.homeRoot = Home;
    this.aboutRoot = About;
    this.settingsRoot = Settings;

    platform.ready().then(() => {
      if (window.StatusBar) {
        window.StatusBar.show();
        window.StatusBar.styleDefault();
      }
    });

    // Get the data
    dataService.retrieveData();
  }
}
