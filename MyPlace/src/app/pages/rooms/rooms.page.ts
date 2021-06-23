import { Component, ViewEncapsulation } from "@angular/core";
import { Room } from "src/app/models/room.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-rooms',
    templateUrl: 'rooms.page.html',
    styleUrls: ['rooms.page.scss'],
    encapsulation: ViewEncapsulation.None,
  })

export class RoomsPage{
  rooms: Array<Room>

  constructor(private apiSvc: ApiService){

  }

  ionViewWillEnter(){
    this.apiSvc.get("api/Rooms").subscribe((response: Array<Room>) => {
      this.rooms = response;
      console.log(response);
    })
  }
}