import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isAuthenticated = false;
  constructor(private storageService: StorageService, private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      (menssage) => { this.isAuthenticated = menssage; }
    );
    if (!this.isAuthenticated){
      this.storageService.setLocalUser(null);
      this.router.navigate(['/auth/login']);
    }
  }

  logout(){
    this.storageService.setLocalUser(null);
    this.router.navigate(['/auth/login']);
  }

}
