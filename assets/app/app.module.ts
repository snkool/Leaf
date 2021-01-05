import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { myrouting } from './app.routing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



import { AppComponent } from "./app.component";
import { LoginComponent } from "./view/login/login.component";
import { NavComponent } from "./view/home/nav/nav.component";
import { destaqueComponent } from "./view/home/c-destaque/destaque.component";
import { ListaObraComponent } from "./view/home/lista-obras/lista-obras.component";
import { RegistroComponent } from "./view/registro/registro.component";
import { ObraComponent } from "./view/obra/obra.component";

import { HttpModule } from "@angular/http";

import { MaterializeModule } from "angular2-materialize";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavComponent,
        destaqueComponent,
        ListaObraComponent,
        RegistroComponent,
        ObraComponent
    ],
    imports: [BrowserModule, MaterializeModule, FormsModule, 
        myrouting, ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}