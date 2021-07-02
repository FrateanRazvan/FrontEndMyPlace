import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AddBookingPage } from './pages/add.booking.page/add.booking.page';
import { AddProgrammePage } from './pages/add.programme.page/add.programme.page';
import { AddRoomPage } from './pages/add.room.page/add.room.page';
import { BookingPage } from './pages/bookings/booking.page';
import { EditBookingPage } from './pages/edit.booking.page/edit.booking.page';
import { LoginPage } from './pages/login/login.page';
import { ProgrammePage } from './pages/programmes/programme.page';
import { RentPage } from './pages/rents/rent.page';
import { RoomsPage } from './pages/rooms/rooms.page';
import { WelcomePage } from './pages/welcome/welcome.page';
import { AuthGuard } from './security.guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rooms',
    component: RoomsPage
  },
  {
    path: 'rooms/add',
    component: AddRoomPage
  },
  {
    path: 'programmes/add',
    component: AddProgrammePage
  },
  {
    path: 'rents',
    component: RentPage
  },
  {
    path: 'bookings',
    component: BookingPage
  },
  {
    path: 'bookings/add',
    component: AddBookingPage
  },
  {
    path: 'bookings/edit',
    component: EditBookingPage
  },
  {
    path: 'programmes',
    component: ProgrammePage
  },
  {
    path: 'home',
    component: WelcomePage
  },
  { 
    path: 'members', 
    canActivate: [AuthGuard],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
