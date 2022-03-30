import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatedraticoComponent } from './catedratico/catedratico.component';
import { CursoComponent } from './curso/curso.component';
import { LoginComponent } from './login/login.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
