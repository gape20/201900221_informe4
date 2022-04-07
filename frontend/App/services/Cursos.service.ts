import { Injectable } from "@angular/core";
import { cursos } from "models/cursos";
import {Global} from "./GlobalUrl"
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
}
  
)
export class cursosService{
    public url: string;
    constructor(
        public _http: HttpClient
    ){
        this.url = Global.url
    }
    getCursos() {
        return this._http.get(this.url+`/curso`);
      }
    deleteCursos(idCurso: string) {
        return this._http.delete(this.url+ `/curso/${idCurso}`);
        }
    crearCurso (curso: cursos) {
        return this._http.post(this.url+`/curso`,curso);
      }
    updateCurso(updateCurso: cursos): Observable<cursos>{
        return this._http.put(this.url+ `/curso`, updateCurso);
      }
    getCurso(idCurso: string){
      return this._http.get(this.url+`/curso/${idCurso}`);
    }
                     
}