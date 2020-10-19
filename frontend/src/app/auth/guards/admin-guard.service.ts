import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from 'src/app/shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private storageService:StorageService, private router: Router) { }

  canActivate() : boolean{

    let usuario = this.storageService.getLocalUser();

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(usuario.token);

    if (decodedToken.scopes && decodedToken.scopes.includes('ROLE_ADMIN')){
      return true;
    }
    else{
      this.router.navigate(['home']);
    }

    return false;
  }
}
