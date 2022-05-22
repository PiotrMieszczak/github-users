import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  User,
  UsersListQuery,
  UsersListService,
} from '../../../../store/users-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private readonly _userQuery: UsersListQuery,
    private readonly _userService: UsersListService,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._userQuery.selectAll().subscribe(res => {
      this.users = res;
      this._cdr.markForCheck();
    });
  }
}
