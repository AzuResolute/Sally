import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { PaginatedResult } from '../_models/pagination';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Node, Link } from '../d3/models';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  defaultUserImg = '../../../assets/user.png';
  currentUser: User = null;
  userParams: any = {};
  users: User[];
  matchedUser: User = null;
  matchedNoun = 'them';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    const currentUser = this.authService.currentUser;

    this.currentUser = currentUser;
    this.userParams.gender = this.currentUser.gender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 65;
    this.loadRecommendation();

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
  }

  loadRecommendation() {
    this.userService.getUsers(
      null,
      null,
      this.userParams).subscribe((response: PaginatedResult<User[]>) => {
        const users = response.result;
        const randomNum = Math.floor(Math.random() * (8 + 1));
        this.matchedUser = users[randomNum];
        if (this.matchedUser === null) {
          setTimeout(() => {
            this.loadRecommendation();
          }, 50);
        }
      }, error => {
        this.alertify.error(error);
      }
    );
  }

}
