import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from 'src/app/_models/pagination';
import { PaginatedResult } from '../../_models/pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {
  users: User[];
  user: User = JSON.parse(localStorage.getItem('user'));
  genderList = [{value: 'male', display: 'Male'}, {value: 'female', display: 'Female'}];
  userParams: any = {};
  pagination: Pagination;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
      this.pagination = data['users'].pagination;
      console.log(this.pagination);
    });

    this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 65;
    this.userParams.orderBy = 'lastActive';
  }

  resetFilter() {
    this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 65;
    this.loadUsers();
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams).subscribe(
      (response: PaginatedResult<User[]>) => {
        this.users = response.result;
        this.pagination = response.pagination;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}

