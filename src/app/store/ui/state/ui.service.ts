import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UiStore } from './ui.store';

@Injectable({ providedIn: 'root' })
export class UiService {
  constructor(private uiStore: UiStore, private http: HttpClient) {}

  changeTheme(theme) {}
}
