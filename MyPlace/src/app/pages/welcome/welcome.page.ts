import { Component } from "@angular/core";

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.page.html',
    styleUrls: ['welcome.page.scss']
  })

export class WelcomePage{
  username = localStorage.getItem("user_email");
}