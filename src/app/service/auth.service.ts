import { environment } from './../../environments/environment.prod';
import { UserLogin } from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
   private http: HttpClient
  ) {}
 
  entrar(UserLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoalthiago.herokuapp.com/usuarios/logar',UserLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blogpessoalthiago.herokuapp.com/usuarios/cadastrar', user)

  }

logado (){

  let ok = false
  if( environment.token != ''){
    ok = true
  }
  return ok
}
}