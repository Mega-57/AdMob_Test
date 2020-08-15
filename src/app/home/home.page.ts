import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public admob: AdMobFree) {

  }

  showBanner() {

      let bannerConfig: AdMobFreeBannerConfig = {
          isTesting: true, // Remove in production
          autoShow: true,
          id: "ca-app-pub-3940256099942544/2934735716"
      };

      this.admob.banner.config(bannerConfig);

      this.admob.banner.prepare().then(() => {
          // success
      }).catch(e => console.log(e));

  }
}
