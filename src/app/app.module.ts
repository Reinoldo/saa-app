import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//import { MaterializeModule } from 'angular2-materialize';
import { LoginComponent } from './login/login.component';

import { PesquisarModule } from './pesquisar/pesquisar.module';
import { VincularMuniciModule } from './vincular-munici/vincular-munici.module';
import { VincularPerfilModule } from './vincular-perfil/vincular-perfil.module';
import { CadastraUsuarioModule } from './cadastra-usuario/cadastra-usuario.module';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { AuthService } from './shared/services/auth.service';


@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    routing, 
    VincularMuniciModule, 
    CadastraUsuarioModule, 
    PesquisarModule,
     VincularPerfilModule,
     AngularDualListBoxModule
     
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
