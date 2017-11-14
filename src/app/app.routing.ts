import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { LoginComponent } from './login/login.component';
import { VincularMuniciComponent } from './vincular-munici/vincular-munici.component';
import { VincularPerfilComponent } from './vincular-perfil/vincular-perfil.component';


const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'cadastro', component: CadastraUsuarioComponent},
    {path: 'vincular_municipio', component: VincularMuniciComponent},
    {path: 'vincular_perfil', component: VincularPerfilComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
