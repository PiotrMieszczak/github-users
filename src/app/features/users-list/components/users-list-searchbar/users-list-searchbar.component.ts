import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-list-searchbar',
  templateUrl: './users-list-searchbar.component.html',
  styleUrls: ['./users-list-searchbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListSearchbarComponent {
  form: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.form = this.buildForm();
    this.startSubForThemeChanges();
  }

  startSubForThemeChanges(): void {
    this.form.get('searchedName')?.valueChanges;
  }

  private buildForm(): FormGroup {
    return this._fb.group({
      searchedName: new FormControl(''),
    });
  }
}
