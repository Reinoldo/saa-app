import { SharedModule } from './../shared/shared.module';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { VincularMuniciComponent } from './vincular-munici.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, SharedModule, HttpModule
  ],
  declarations: [VincularMuniciComponent],
  providers:[]
})
export class VincularMuniciModule { }