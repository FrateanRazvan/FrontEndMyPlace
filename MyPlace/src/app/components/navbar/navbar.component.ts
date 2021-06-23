import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.components.html',
  })

  export class NavbarComponent{
    @Input() pageName: string;
  }