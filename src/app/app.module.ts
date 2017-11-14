import { routing } from './app.routing';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { VincularMuniciComponent } from './vincular-munici/vincular-munici.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { VincularMuniciModule } from './vincular-munici/vincular-munici.module';
import { VincularPerfilComponent } from './vincular-perfil/vincular-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
   VincularMuniciComponent, FormDebugComponent, LoginComponent, CadastraUsuarioComponent, VincularPerfilComponent
  ],
  imports: [
    BrowserModule,FormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
