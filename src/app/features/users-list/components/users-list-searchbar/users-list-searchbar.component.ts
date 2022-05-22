import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  delay,
  distinctUntilChanged,
  startWith,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { UsersListQuery, UsersListService } from '../../../../store/users-list';

const DELAY_TIME = 300;

@Component({
  selector: 'app-users-list-searchbar',
  templateUrl: './users-list-searchbar.component.html',
  styleUrls: ['./users-list-searchbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListSearchbarComponent implements OnDestroy {
  form: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userQuery: UsersListQuery,
    private readonly _userService: UsersListService
  ) {
    this.form = this.buildForm();
    this.startSubForNameChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  startSubForNameChanges(): void {
    const search$ = this.form.controls['searchedName'].valueChanges.pipe(
      delay(DELAY_TIME),
      distinctUntilChanged()
    );

    search$
      .pipe(
        startWith(this._userQuery.getValue().query),
        tap(query => this._userService.setQuery(query)),
        switchMap(query => {
          return this._userService.searchByName(query);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private buildForm(): FormGroup {
    return this._fb.group({
      searchedName: new FormControl(''),
    });
  }
}
