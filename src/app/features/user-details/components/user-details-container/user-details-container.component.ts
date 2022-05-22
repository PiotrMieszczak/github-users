import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { UserDetailsService } from '../../../../store/user-details/user-details.service';

@Component({
  selector: 'app-user-details-container',
  templateUrl: './user-details-container.component.html',
  styleUrls: ['./user-details-container.component.scss'],
})
export class UserDetailsContainerComponent {
  constructor(
    private readonly _router: ActivatedRoute,
    private readonly _userDetailsService: UserDetailsService
  ) {
    this.startRouterSub();
  }

  private startRouterSub(): void {
    this._router.paramMap
      .pipe(
        map(paramMap => paramMap.get('login')),
        filter(Boolean)
      )
      .subscribe((login: string) => {
        this.getData(login);
      });
  }

  private getData(login: string): void {
    this._userDetailsService.getData(login).subscribe();
  }
}
