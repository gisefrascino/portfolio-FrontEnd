import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Educacion } from '../models/Educacion';

const httpOptions={
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiUrl:string='https://bkdargprograma.herokuapp.com/educaciones/';
  //educaciones:Educacion[]=[];

  constructor(private http:HttpClient) { }

  public obtenerDatos():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiUrl+'traer');
}

  public detalle(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.apiUrl+`detalle/${id}`);

  }

  public save(educacion:Educacion):Observable<any>{
  return this.http.post<any>(this.apiUrl+'crear',educacion)
}

  public updateEducacion(id:number, educacion:Educacion):Observable<any>{
    return this.http.put<any>(this.apiUrl+`editar/${id}`, educacion);
  }


  public deleteEducacion(id:number):Observable<any>{
    return this.http.delete<any>((this.apiUrl+`borrar/${id}`));
}
}
