import { FormMunicipioComponent } from './form-municipio.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, SharedModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [FormMunicipioComponent],
  exports: [FormMunicipioComponent],
  providers: [FormMunicipioComponent]
})
export class FormMunicipioModule { }
