import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { LoginComponent } from './login/login.component';
import { VincularMuniciComponent } from './vincular-munici/vincular-munici.component';


const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},    
    {path: 'cadastro', component: CadastraUsuarioComponent},
    {path: 'vincular_municipio', component: VincularMuniciComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

