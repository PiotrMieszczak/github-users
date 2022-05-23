import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserDetailed } from '../../../../store/user-details/user-detail.model';

@Component({
  selector: 'app-user-details-profile',
  templateUrl: './user-details-profile.component.html',
  styleUrls: ['./user-details-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsProfileComponent {
  @Input() user: UserDetailed | null = null;
}
