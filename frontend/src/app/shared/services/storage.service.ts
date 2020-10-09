import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getLocalUser() : Usuario {
    let user = localStorage.getItem('localUser');
    if (user){
      return JSON.parse( user );
    }
    else return null;
  }

  /**
   *JSON.parse converte de string para json
   JSON.stringfy converte de json para String
   *
   */
  public setLocalUser(obj){
    if (obj == null){
      localStorage.removeItem('localUser');
    }
    else{
      localStorage.setItem('localUser', JSON.stringify (obj));
    }
  }
}
