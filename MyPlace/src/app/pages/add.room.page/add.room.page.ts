import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Room } from "src/app/models/room.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-add-room',
    templateUrl: 'add.room.page.html',
  })

export class AddRoomPage{

    room = new Room();
    
    constructor(private apiSvc: ApiService, private navCtrl: NavController){
    }

    addRoom(){
        console.log(this.room);
        this.apiSvc.post("api/Rooms", this.room).subscribe(()=> {
            this.navCtrl.pop();
        
        });
    }

   
}