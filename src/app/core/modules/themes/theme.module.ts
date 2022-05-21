import { NgModule } from '@angular/core';
import { DarkThemeComponent } from './components/dark-theme/dark-theme.component';

@NgModule({
  declarations: [DarkThemeComponent],
  exports: [DarkThemeComponent],
})
export class ThemesModule {}
