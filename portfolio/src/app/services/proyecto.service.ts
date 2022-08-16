import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Proyecto } from '../models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl:string='http://localhost:8080/proyectos/';
  proyectos:Proyecto[]=[];

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.apiUrl+'traer');
}
}
