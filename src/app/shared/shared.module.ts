import { EstadosBrService } from './services/estados-br.service';
import { DadosLoginService } from './services/dados-login.service';
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
  providers: [DadosLoginService, EstadosBrService]
  
})
export class SharedModule { }
