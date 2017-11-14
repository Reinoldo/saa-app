import { routing } from './app.routing';
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
<<<<<<< HEAD
    AppComponent,LoginComponent, CadastraUsuarioComponent, VincularPerfilComponent
=======
    AppComponent,
   VincularMuniciComponent, FormDebugComponent, LoginComponent, CadastraUsuarioComponent, VincularPerfilComponent
>>>>>>> c729870fb6c445963855a37f90fdb6642298756a
  ],
  imports: [
    BrowserModule,FormsModule, routing, VincularMuniciModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
