import {Page} from 'ionic/ionic';

import {DataService} from './../service/data';

@Page({
  templateUrl: 'app/about/about.html'
})
export class About {
  constructor(dataService:DataService) {
    this.about = dataService.getAbout();
  }
}
