import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";


@Component({
    selector: 'app-side-menu',
    templateUrl: 'side.menu.components.html',
  })

  export class SideMenuComponent{

    constructor(private authSvc: AuthService, private navCtrl: NavController, private route: ActivatedRoute){

    }

    logOut(){
      this.authSvc.removeToken();
      this.navCtrl.navigateRoot("login");
    }
  }