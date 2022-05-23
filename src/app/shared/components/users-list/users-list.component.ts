import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../../store/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input() public users: User[] = [];
}
