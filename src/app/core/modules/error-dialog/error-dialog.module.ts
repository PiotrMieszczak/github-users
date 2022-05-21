import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { TuiButtonModule, TuiDialogModule } from '@taiga-ui/core';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, TuiDialogModule, TuiButtonModule],
  exports: [ErrorDialogComponent],
})
export class ErrorDialogModule {}
