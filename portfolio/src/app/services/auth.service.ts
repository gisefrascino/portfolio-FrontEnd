import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/Jwt-dto';
import { LoginUsuario } from '../models/Login-usuario';
import { NuevoUsuario } from '../models/Nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl:string='https://bkdargprograma.herokuapp.com/auth/';

  constructor(private http:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{
    return this.http.post<any>(this.authUrl+'nuevo', nuevoUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.http.post<JwtDto>(this.authUrl+'login', loginUsuario);
  }
}
