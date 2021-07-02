import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Room } from "src/app/models/room.model";
import { RoomComments } from "src/app/models/roomComments.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-rooms',
    templateUrl: 'rooms.page.html',
    styleUrls: ['rooms.page.scss'],
    encapsulation: ViewEncapsulation.None,
  })

export class RoomsPage{

  rooms: Array<Room>
  comments: Array<RoomComments>
  displayComments: Array<RoomComments>
  comLength: number = 0;
  selectedRoomNumber: number = 0; 
  selectedRoomId: number = 0;
  commentAdd = new RoomComments();

  constructor(private apiSvc: ApiService, private router: Router, private navCtrl: NavController){

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

  viewComments(room: Room){
    this.apiSvc.get("api/Rooms/" + room.id + "/comments").subscribe((response) => 
    {
      
      this.comments = response[0].comments;
      this.comLength = this.comments.length;
      this.selectedRoomNumber = response[0].roomNumber
      this.selectedRoomId = response[0].id;
      
    })
  }

  loadRooms(){
    this.apiSvc.get("api/Rooms").subscribe((response: Array<Room>) => {
      this.rooms = response;
      
    })
  }

  addComment(){
    this.commentAdd.dateTime = new Date();
    this.apiSvc.post("api/rooms/" + this.selectedRoomId + "/comments", this.commentAdd).subscribe(() =>{
      this.navCtrl.pop();
    });
  }
}