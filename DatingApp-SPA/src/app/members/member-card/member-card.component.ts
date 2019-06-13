import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  defaultUserImg = '../../../assets/user.png';

  constructor(private authService: AuthService, private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  sendLike(recipientId: number) {
    const userId = this.authService.decodedToken.nameid;
    this.userService.sendLike(userId, recipientId).subscribe(() => {
      this.alertify.success('You have liked ' + this.user.knownAs);
    }, error => {
      this.alertify.error(error);
    });
  }
}
