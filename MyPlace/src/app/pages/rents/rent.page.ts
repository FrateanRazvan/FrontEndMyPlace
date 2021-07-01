import { Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { Rent } from "src/app/models/rent.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-rent',
    templateUrl: 'rent.page.html',
    styleUrls: ['rent.page.scss'],
  })

export class RentPage{

  rents: Array<Rent>;
  programmeNames = new Set();

  constructor(private apiSvc: ApiService, private router: Router){

  }

  ionViewWillEnter(){
    this.apiSvc.get("api/Rents").subscribe((response: Array<Rent>) => {
      // console.log(response);
      
      response.forEach( (x) =>  {
       
        this.programmeNames.add(x.name.toString());
      })

      this.rents = response;
    });
  }

  onClickNavigate(programme: any){

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: programme
      }
    }

    this.router.navigate(['/programmes'], navigationExtras);
  }

  goToAddProgramme(){
    this.router.navigateByUrl("/programmes/add")
  }
}