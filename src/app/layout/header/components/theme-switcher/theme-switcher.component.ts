import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  form: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.form = this.buildForm();
    this.startSubForThemeChanges();
  }

  startSubForThemeChanges(): void {
    this.form.get('themeControl')?.valueChanges;
  }

  private buildForm(): FormGroup {
    return this._fb.group({
      themeControl: new FormControl([false]),
    });
  }
}
