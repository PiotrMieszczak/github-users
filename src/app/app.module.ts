import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { HeaderModule } from './layout/header/header.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor, ErrorDialogModule } from './core';

const APP_MODULES = [HeaderModule, ErrorDialogModule];
const UI_LIB_MODULES = [
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiDialogModule,
];
const STORE_MODULES = [AkitaNgDevtools.forRoot()];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    [...APP_MODULES],
    [...UI_LIB_MODULES],
    [...STORE_MODULES],
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
