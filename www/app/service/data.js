import {IonicApp} from 'ionic/ionic';
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class DataService {
  constructor(app:IonicApp, http:Http) {
    this.app = app;
    this.http = http;
    this.about = null;
  }

  retrieveData() {
    this.http.get('app/data/info.json')
      .map(res => res.json())
      .subscribe(data => {
        this.about = data;
      });
  }

  getAbout() {
    return this.about;
  }
}
