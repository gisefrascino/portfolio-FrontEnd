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
  private apiUrl:string='https://bkdargprograma.herokuapp.com/experiencias/';
  //experiencias:Experiencia[]=[];

  constructor(private http:HttpClient) { }

  public lista():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl+'traer');
}
  public detalle(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.apiUrl+ `detalle/${id}`);
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
}
  
