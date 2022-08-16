import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experiencia } from '../models/Experiencia';

const httpOptions={
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiUrl:string='http://localhost:8080/experiencias/';
  //experiencias:Experiencia[]=[];

  constructor(private http:HttpClient) { }

  public lista():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl+'traer');
}
  public detalle(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.apiUrl+ `detail/${id}`);
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(this.apiUrl+'crear',experiencia);

  }
  
  public updateExperiencia(id:number, experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.apiUrl+ `editar/${id}`, experiencia);
  }

  public deleteExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(this.apiUrl+ `borrar/${id}`);
}
  
  //addExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    //return this.http.post<Experiencia>(this.apiUrl, experiencia, httpOptions)
  //}
}
  
