import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Proyecto } from '../models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl:string='https://bkdargprograma.herokuapp.com/proyectos/';
  //proyectos:Proyecto[]=[];

  constructor(private http:HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.apiUrl+'traer');
}
  public detalle(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.apiUrl+ `detail/${id}`);
  }
}
