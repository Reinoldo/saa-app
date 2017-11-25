import { FormMunicipioComponent } from './../vincular-munici/form-municipio/form-municipio.component';

import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormDebugComponent, CampoControlErroComponent],
  exports: [FormDebugComponent, CampoControlErroComponent],
  providers: [FormMunicipioComponent]
  
})
export class SharedModule { }
