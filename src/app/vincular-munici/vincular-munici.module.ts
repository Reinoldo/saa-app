import { FormMunicipioComponent } from './form-municipio/form-municipio.component';
import { FormMunicipioModule } from './form-municipio/form-municipio.module';
import { SharedModule } from './../shared/shared.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


import { VincularMuniciComponent } from './vincular-munici.component';

@NgModule({
  imports: [
    CommonModule, HttpModule, FormMunicipioModule, SharedModule
  ],
  declarations: [VincularMuniciComponent],
  providers:[FormMunicipioComponent]
})
export class VincularMuniciModule { }