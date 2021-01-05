import { Routes, RouterModule } from "@angular/router";
import { NavComponent } from "./view/home/nav/nav.component";
import { LoginComponent } from "./view/login/login.component";
import { RegistroComponent } from "./view/registro/registro.component";
import { ObraComponent } from "./view/obra/obra.component";



const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: NavComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: RegistroComponent },
    { path: 'obra', component: ObraComponent }
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);