import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Rent } from "src/app/models/rent.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-programme',
    templateUrl: 'programme.page.html',
    styleUrls: ['programme.page.scss'],
  })

export class ProgrammePage{
    
    title: any;
    programmes: Array<Rent>;
    pageNumber: number = 3;
    currentPg: number;
    searchElement: string = "";

    constructor(private route: ActivatedRoute, private router:  Router, private apiSvc: ApiService, private navCtrl: NavController){
        this.route.queryParams.subscribe(params => {
            
            if(params && params.special){
                this.title = params.special;
                // console.log(this.title);
                
            }
        });
    }
    
    ionViewWillEnter(){
        this.getAllDataForProgramme(this.title);
    }

    getAllDataForProgramme(param: any){
        this.apiSvc.get("api/Rents/filter/name="+ param).subscribe((response: Array<Rent>) => {
            // console.log(response);
             this.programmes = response;
        });
    }

    viewBooks(idProgramme: number, max: number){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                idProgramme: JSON.stringify(idProgramme),
                max: JSON.stringify(max)
            }
        };

        this.navCtrl.navigateForward(['bookings'], navigationExtras);
    }

   inc(){
       if(this.pageNumber < this.programmes.length){
            this.pageNumber += 3;
       }   
   }

   dec(){

    if(this.pageNumber > 3){
        this.pageNumber -= 3;
    } 

   }

   bookThis(rent: Rent){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                rent: JSON.stringify(rent)
            }
        };

        this.navCtrl.navigateForward(['bookings/add'], navigationExtras);
   }

}