import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { TuiToggleModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, ThemeSwitcherComponent],
  imports: [
    CommonModule,
    FormsModule,
    TuiButtonModule,
    TuiToggleModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
