
import { SharedModule } from './../shared/shared.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


import { VincularMuniciComponent } from './vincular-munici.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, HttpModule, SharedModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [VincularMuniciComponent],
  providers:[]
})
export class VincularMuniciModule { }