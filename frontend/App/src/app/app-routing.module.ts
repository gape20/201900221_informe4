import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatedraticoComponent } from './catedratico/catedratico.component';
import { CursoComponent } from './curso/curso.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {
    path: 'curso', component: CursoComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'catedratico', component: CatedraticoComponent
  },
  {
    path: 'publicacion', component: PublicacionComponent
  },
  {
    path: 'registrar', component: RegistrarComponent
  },
  {
    path: 'main', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
