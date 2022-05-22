import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/users-list/users-list.module').then(
        m => m.UsersListModule
      ),
    data: { state: 'list' },
  },
  {
    path: 'user/:login',
    loadChildren: () =>
      import('./features/user-details/user-details.module').then(
        m => m.UserDetailsModule
      ),
    data: { state: 'details' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
