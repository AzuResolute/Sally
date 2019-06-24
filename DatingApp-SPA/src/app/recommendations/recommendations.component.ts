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
  // nodes: Node[];
  // links: Link[];
  // CONFIG = {
  //   N : 100,
  //   SPECTRUM: [
  //     // "rgb(222,237,250)"
  //     'rgb(176,212,243)',
  //     'rgb(128,186,236)',
  //     'rgb(77,158,228)',
  //     'rgb(38,137,223)',
  //     'rgb(0,116,217)',
  //     'rgb(0,106,197)'
  //     // "rgb(0,94,176)"
  //     // "rgb(0,82,154)"
  //     // "rgb(0,60,113)"
  //   ]
  // };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertify: AlertifyService
  ) {
    // const N = this.CONFIG.N,
    // getIndex = number => number - 1;

    // /** constructing the nodes array */
    // for (let i = 1; i <= N; i++) {
    //   this.nodes.push(new Node(i));
    // }

    // for (let i = 1; i <= N; i++) {
    //   for (let m = 2; i * m <= N; m++) {
    //     /** increasing connections toll on connecting nodes */
    //     this.nodes[getIndex(i)].linkCount++;
    //     this.nodes[getIndex(i * m)].linkCount++;

    //     /** connecting the nodes before starting the simulation */
    //     this.links.push(new Link(i, i * m));
    //   }
    // }
  }

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
