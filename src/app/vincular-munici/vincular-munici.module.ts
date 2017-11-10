import { FormDebugComponent } from './../form-debug/form-debug.component';
import { FormsModule } from '@angular/forms';
import { VincularMuniciComponent } from './vincular-munici.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [VincularMuniciComponent, FormDebugComponent]
})
export class VincularMuniciModule { }
