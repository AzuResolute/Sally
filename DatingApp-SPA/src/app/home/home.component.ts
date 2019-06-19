import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  userId: string;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    const userId = this.authService.decodedToken.nameid;
    console.log(userId);
    if (userId) {
      this.userId = userId;
    }
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
