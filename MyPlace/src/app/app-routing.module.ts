import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddRoomPage } from './pages/add.room.page/add.room.page';
import { LoginPage } from './pages/login/login.page';
import { RoomsPage } from './pages/rooms/rooms.page';

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
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
