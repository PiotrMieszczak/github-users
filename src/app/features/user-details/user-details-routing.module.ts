import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsContainerComponent } from './components/user-details-container/user-details-container.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsContainerComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailsRoutingModule {}
