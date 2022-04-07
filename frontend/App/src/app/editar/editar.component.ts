import { Component, OnInit } from '@angular/core';
import { cursos } from 'models/cursos';
import { cursosService } from 'services/Cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [cursosService]
})
export class EditarComponent implements OnInit {

  Curso: cursos={
    idCurso: 0,
    nombre:''
  };
  constructor(private cursoService: cursosService, private activatedroute: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {

    const params = this.activatedroute.snapshot.params;
    console.log(params)
    if (params['id']){
      this.cursoService.getCurso(params['id'])
        .subscribe(
          res => {console.log(res)
            this.Curso = res
          },
        err => console.error(err)
    )
    }
  }
  EditarCurso(){
    this.cursoService.updateCurso(this.Curso)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/curso'])
      },
     err => console.error(err)
    )
  }

}
