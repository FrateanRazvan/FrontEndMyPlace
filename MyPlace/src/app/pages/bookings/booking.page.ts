import { Component } from "@angular/core";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Book } from "src/app/models/book.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-bookings',
    templateUrl: 'booking.page.html',
    styleUrls: ['booking.page.scss']

})

export class BookingPage{

    idProgramme: number;
    bookings: Array<Book>;
    bookingLength: number;
    maxParticipants: number;

    constructor(protected route: ActivatedRoute, protected apiSvc: ApiService, protected navCtrl: NavController){
        
    }

    ionViewWillEnter(){
        this.getProgrammeId();
        this.getUserProgrammes(this.idProgramme);
    }

    getUserProgrammes(param: number){
        this.apiSvc.get("api/Books/filter/progId=" + param).subscribe((response: Array<Book>) => {
            this.bookings = response;
            this.bookingLength = response.length;
            console.log(this.bookings);
        })
    }

    getProgrammeId(){
        this.route.queryParams.subscribe(params => {
           
            this.idProgramme = JSON.parse(params["idProgramme"]);
            this.maxParticipants = JSON.parse(params["max"]);
            // console.log(this.idProgramme);
        });
    }

    goBack(){
        this.navCtrl.back();
    }

    deleteBook(booking: Book){
        this.apiSvc.delete(`api/Books/${booking.id}`).subscribe(() => {
            console.log(booking)
            this.getUserProgrammes(this.idProgramme);
          });
    }

    editBook(booking: Book){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                booking: JSON.stringify(booking)
            }
        };

        this.navCtrl.navigateForward(['bookings/edit'], navigationExtras);
    }
}