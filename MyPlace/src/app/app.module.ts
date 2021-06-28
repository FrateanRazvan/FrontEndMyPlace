import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login.page';
import { RoomsPage } from './pages/rooms/rooms.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side.menu/side.menu.components';
import { ApiService } from './services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddRoomPage } from './pages/add.room.page/add.room.page';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './interceptors/auth.token.interceptor';
import { RentPage } from './pages/rents/rent.page';
import { ProgrammePage } from './pages/programmes/programme.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { WelcomePage } from './pages/welcome/welcome.page';


@NgModule({
  declarations: [
    //Components
    AppComponent, 
    NavbarComponent, 
    SideMenuComponent,

    //Pages
     LoginPage, 
     RoomsPage,
     AddRoomPage,
     RentPage,
     ProgrammePage,
     WelcomePage,
    ],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule, 
    HttpClientModule, NgxPaginationModule], 
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
