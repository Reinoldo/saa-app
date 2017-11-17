import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { LoginComponent } from './login/login.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { VincularMuniciModule } from './vincular-munici/vincular-munici.module';
import { VincularPerfilComponent } from './vincular-perfil/vincular-perfil.component';
import { CadastraUsuarioModule } from './cadastra-usuario/cadastra-usuario.module';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, VincularPerfilComponent
  ],
  imports: [
    BrowserModule,FormsModule, routing, VincularMuniciModule, CadastraUsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
