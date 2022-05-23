import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Repo } from '../../../../store/user-details/user-detail.model';

@Component({
  selector: 'app-user-details-repos',
  templateUrl: './user-details-repos.component.html',
  styleUrls: ['./user-details-repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsReposComponent {
  @Input() repos: Repo[] = [];
}
