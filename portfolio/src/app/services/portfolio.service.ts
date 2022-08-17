import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Persona } from '../models/Persona';

const httpOptions={
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  private apiUrl:string='http://localhost:8080/personas/';
  //personas:Persona[]=[];

  constructor(private http:HttpClient) { }

  public obtenerDatos():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiUrl+'traer');
  }

  public detalle(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.apiUrl+`detalle/${id}`);
  }

  public save(persona:Persona):Observable<any>{
  return this.http.post<any>(this.apiUrl+'crear',persona)
  }

  public updatePersonaCarrera(id:number, persona:Persona):Observable<any>{
    return this.http.put<any>(this.apiUrl+`editarcarrera/${id}`, persona);
  }

  public updatePersonaInfo_Prof(id:number, persona:Persona):Observable<any>{
    return this.http.put<any>(this.apiUrl+`editarinfo_prof/${id}`, persona);
  }

  public deletePersonaInfo_Prof(id:number, persona:Persona):Observable<any>{
    return this.http.put<any>(this.apiUrl+`borrarinfo_prof/${id}`, persona);
  }

  public updatePersonaImg_Fondo(id:number, persona:Persona):Observable<any>{
    return this.http.put<any>(this.apiUrl+`editarimg_fondo/${id}`, persona);
  }

  public updatePersonaImg_Perfil(id:number, persona:Persona):Observable<any>{
    return this.http.put<any>(this.apiUrl+`editarimg_perfil/${id}`, persona);
  }

  public deletePersona(id:number):Observable<any>{
    return this.http.delete<any>((this.apiUrl+`borrar/${id}`));
}
}
