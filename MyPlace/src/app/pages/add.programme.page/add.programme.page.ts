import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { AddProgramme } from "src/app/models/addProgramme.model";
import { Programme } from "src/app/models/programme.model";
import { Room } from "src/app/models/room.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-add-programme',
    templateUrl: 'add.programme.page.html',
    styleUrls: ['add.programme.page.scss'],
})

export class AddProgrammePage{

    rooms: Array<Room>;
    programme = new Programme();
    addProgram = new AddProgramme();

    constructor(private apiSvc: ApiService, private router: Router, private navCtrl: NavController){

    }

    ionViewWillEnter(){
        this.loadRooms();
      }

    loadRooms(){
        this.apiSvc.get("api/Rooms").subscribe((response: Array<Room>) => {
          this.rooms = response;
          
        })
    }

    addProgramme(){
        
        this.addProgram.rentRoomsIds.push(this.programme.rentRoomsIds);
        this.addProgram.name = this.programme.name;
        this.addProgram.max_participants = this.programme.max_participants;
        this.addProgram.start_date = this.programme.start_date;
        this.addProgram.end_date = this.programme.end_date;
                
        this.apiSvc.post("api/rents", this.addProgram).subscribe(() => {
            this.navCtrl.pop();
        });
    }

}