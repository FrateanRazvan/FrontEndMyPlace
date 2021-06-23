import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
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

  constructor(private apiSvc: ApiService, private router: Router){

  }

  ionViewWillEnter(){
    this.loadRooms();
  }

  goToAddRoom(){
    this.router.navigateByUrl("rooms/add")
  }

  deleteRoom(room: Room){
    this.apiSvc.delete(`api/Rooms/${room.id}`).subscribe(() => {
      this.loadRooms();
    });
  }

  loadRooms(){
    this.apiSvc.get("api/Rooms").subscribe((response: Array<Room>) => {
      this.rooms = response;
      
    })
  }
}