import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-programme',
    templateUrl: 'programme.page.html',
    styleUrls: ['programme.page.scss'],
  })

export class ProgrammePage{

    programme: any;

    constructor(private route: ActivatedRoute, private router:  Router, private apiSvc: ApiService){
        this.route.queryParams.subscribe(params => {
            

            if(params && params.special){
                this.programme = params.special;
                console.log(this.programme);
            }
        });
    }

    getAllDataForProgramme(param: any){
        this.apiSvc.get("api/Rents/filter/name="+ param).subscribe{
            
        }
    }

}