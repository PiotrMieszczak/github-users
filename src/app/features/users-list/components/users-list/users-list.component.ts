import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User, UsersListQuery } from '../../../../store/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  readonly columns = ['avatar', 'name', 'email'];
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userQuery: UsersListQuery,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._userQuery.selectAll().subscribe(res => {
      console.log(res);
      this.users = res;
      this._cdr.markForCheck();
    });
  }
}
