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
  currentUser: User = null;
  matchedUser: User = null;
  matchedNoun = 'them';

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    const currentUser = this.authService.currentUser;
    console.log(currentUser);
    if (currentUser) {
      this.currentUser = currentUser;
      switch (currentUser.gender) {
        case 'male':
          this.matchedNoun = 'him';
          break;
        case 'female':
          this.matchedNoun = 'her';
          break;
        default:
          this.matchedNoun = 'them';
          break;
      }
    } else {
      this.currentUser = null;
      this.matchedNoun = 'them';
    }
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
