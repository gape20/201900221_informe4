import { Component, OnInit } from '@angular/core';
import { cursos } from 'models/cursos';
import{cursosService} from '../../../services/Cursos.service'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [cursosService]
})
export class CursoComponent implements OnInit {
  listaCursos: any =[];
  Curso: cursos={
    idCurso: 0,
    nombre:''
  };
  constructor(private cursoService: cursosService) {
    
   }

  ngOnInit() {

    this.cursoService.getCursos().subscribe(

      res => {this.listaCursos = res; console.log(this.listaCursos)},
      err => console.error(err)
    )
  }
  AgregarCurso(){
    this.cursoService.crearCurso(this.Curso)
    .subscribe(
      res =>{
        console.log(res)
      },
     err => console.error(err)
    )
    }
  ObtenerCursos(){
    this.cursoService.getCursos()
    .subscribe(
      res => {this.listaCursos = res; console.log(this.listaCursos)},
      
     err => console.error(err)
    )
  }
  EditarCurso(){
    this.cursoService.updateCurso(this.Curso)
    .subscribe(
      res =>{
        console.log(res)
      },
     err => console.error(err)
    )
  }
  BorrarCurso(){
    this.cursoService.deleteCursos(this.Curso)
    .subscribe(
      res =>{
        console.log(res)
      },
     err => console.error(err)
    )
  }
  }


