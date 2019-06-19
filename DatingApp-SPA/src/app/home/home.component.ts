import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  // currentUser: User = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // const currentUser = this.authService.currentUser;
    // console.log(currentUser);
    // if (currentUser) {
    //   this.currentUser = currentUser;
    // } else {
    //   this.currentUser = null;
    // }
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
