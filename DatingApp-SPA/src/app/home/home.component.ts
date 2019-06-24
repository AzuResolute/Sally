import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';
import { PaginatedResult } from '../_models/pagination';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Node, Link } from '../d3/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  // defaultUserImg = '../../../assets/user.png';
  // currentUser: User = null;
  // userParams: any = {};
  // matchedUser: User = null;
  // matchedNoun = 'them';
  nodes: Node[];
  links: Link[];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    // const currentUser = await this.authService.currentUser;
    // if (currentUser) {
    //   this.currentUser = currentUser;
    //   this.userParams.gender = this.currentUser.gender === 'female' ? 'male' : 'female';
    //   this.userParams.minAge = 18;
    //   this.userParams.maxAge = 65;
    //   this.loadRecommendation();

    //   switch (currentUser.gender) {
    //     case 'male':
    //       this.matchedNoun = 'him';
    //       break;
    //     case 'female':
    //       this.matchedNoun = 'her';
    //       break;
    //     default:
    //       this.matchedNoun = 'them';
    //       break;
    //     }
    // } else {
    //   this.currentUser = null;
    //   this.matchedNoun = 'them';
    // }
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  // loadRecommendation() {
  //   this.userService.getUsers(
  //     null,
  //     null,
  //     this.userParams).subscribe((response: PaginatedResult<User[]>) => {
  //       const users = response.result;
  //       const randomNum = Math.floor(Math.random() * (8 + 1));
  //       this.matchedUser = users[randomNum];
  //     }, error => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }

}
