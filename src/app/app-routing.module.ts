import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CreateComponent} from'./home/create/create.component';
import {RouterModule,Routes } from '@angular/router';//


const router:Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},//
  {path: 'home',component:HomeComponent},//
  {path: 'create',component:CreateComponent},//
  {path: 'home/edit/:id', component: CreateComponent}//
];
  
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)//
  ],
  declarations:[],
  exports:[RouterModule]
})
export class AppRoutingModule { }
