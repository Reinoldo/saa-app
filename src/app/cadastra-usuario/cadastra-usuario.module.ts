import { SharedModule } from './../shared/shared.module';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { CadastraUsuarioComponent } from './cadastra-usuario.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, SharedModule, HttpModule
  ],
  declarations: [CadastraUsuarioComponent],
  providers:[]
})
export class CadastraUsuarioModule { }
