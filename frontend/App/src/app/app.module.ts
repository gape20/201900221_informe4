import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { LoginComponent } from './login/login.component';
import { CatedraticoComponent } from './catedratico/catedratico.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegistrarComponent } from './registrar/registrar.component';
import { MainComponent } from './main/main.component'
@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    LoginComponent,
    CatedraticoComponent,
    PublicacionComponent,
    RegistrarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
