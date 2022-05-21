import { Component } from '@angular/core';
import { ThemeType } from './core';
import { UiQuery } from './store/ui/state/ui.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Github users';
  theme$: Observable<ThemeType>;

  constructor(private readonly _uiQuery: UiQuery) {
    this.theme$ = this._uiQuery.select(state => state.ui.theme);
  }
}
