import { VincularPerfilComponent } from './vincular-perfil.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    AngularDualListBoxModule,
    CommonModule
  ],
  declarations: [VincularPerfilComponent]
})
export class VincularPerfilModule { }
