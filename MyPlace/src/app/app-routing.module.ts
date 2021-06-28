import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AddRoomPage } from './pages/add.room.page/add.room.page';
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
    path: 'rooms',
    component: RoomsPage
  },
  {
    path: 'rooms/add',
    component: AddRoomPage
  },
  {
    path: 'rents',
    component: RentPage
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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
