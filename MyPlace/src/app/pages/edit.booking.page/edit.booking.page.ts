import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Book } from "src/app/models/book.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-edit-bookings',
    templateUrl: 'edit.booking.page.html',
    styleUrls: ['edit.booking.page.scss']

})

export class EditBookingPage{

    booking: Book;

    constructor(protected route: ActivatedRoute, protected apiSvc: ApiService, protected navCtrl: NavController){
        this.getBooking();
    }

    ionViewWillEnter(){
        this.getBooking();
    }

    getBooking(){
        this.route.queryParams.subscribe(params => {
           
            this.booking = JSON.parse(params["booking"]);
            console.log(this.booking);
        });
    }

    saveBooking(){
        // console.log(this.programme.name);
        this.booking.bookingDateTime = new Date();
        console.log(this.booking);

        this.apiSvc.put(`api/Books/${this.booking.id}`, this.booking).subscribe(() => {
            
                this.navCtrl.back();
            
        });
    }

    goBack(){
        this.navCtrl.back();
    }
}