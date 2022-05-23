import { Component } from '@angular/core';
import { User, UsersListQuery } from '../../../../store/users-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list-container',
  templateUrl: './users-list-container.component.html',
  styleUrls: ['./users-list-container.component.scss'],
})
export class UsersListContainerComponent {
  users$: Observable<User[]>;

  constructor(private readonly _userQuery: UsersListQuery) {
    this.users$ = this.getUsers();
  }

  getUsers(): Observable<User[]> {
    return this._userQuery.selectAll();
  }
}
