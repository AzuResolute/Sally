import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;
  defaultUserImg = '../../assets/user.png';

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in Successfully');
    }, error => {
      this.alertify.error('Login failure');
    }, () => {
      this.router.navigate(['/members']);
    }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  async logout () {
    await localStorage.removeItem('token');
    await localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 100);
    this.router.navigate(['home']);
    this.alertify.message('Logged out');
  }

}
