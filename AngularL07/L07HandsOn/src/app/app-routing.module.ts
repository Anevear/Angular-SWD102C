import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { AlbumsComponent } from './modules/albums/components/albums/albums.component';

const routes: Routes=[
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'albums',
    component: AlbumsComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
