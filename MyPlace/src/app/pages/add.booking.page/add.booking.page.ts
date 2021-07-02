
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Book } from "src/app/models/book.model";
import { Rent } from "src/app/models/rent.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-add-booking',
    templateUrl: 'add.booking.page.html',
    styleUrls: ['add.booking.page.scss'],
})

export class AddBookingPage{

    programme = new Rent();
    book = new Book();
    bookId: number = 0;

    constructor(private route: ActivatedRoute, private apiSvc: ApiService, private navCtrl: NavController){
        this.getRent();
    }

    ionViewWillEnter(){
        this.getRent();
        this.bookId = this.programme.id;
    }

    getRent(){
        this.route.queryParams.subscribe(params => {
           
            this.programme = JSON.parse(params["rent"]);
            
        });
    }

    addBooking(){
        // console.log(this.programme.name);
        this.book.bookingDateTime = new Date();
        this.book.rentId = this.bookId;
        console.log(this.book);

        this.apiSvc.post("api/Books", this.book).subscribe(() => {
            
                this.navCtrl.back();
            
        });
    }

    goBack(){
        this.navCtrl.back();
    }
}