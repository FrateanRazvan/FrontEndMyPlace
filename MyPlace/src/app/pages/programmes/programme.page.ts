import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    

    constructor(private route: ActivatedRoute, private router:  Router, private apiSvc: ApiService){
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
            console.log(response);
             this.programmes = response;
        });
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

}