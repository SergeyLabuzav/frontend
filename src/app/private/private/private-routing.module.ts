import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedUserGuard } from '../../shared/guards/authenticated-user.guard';
import { HomeComponent } from './components/home/home.component';

const privateRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canLoad: [AuthenticatedUserGuard],
    canActivate: [AuthenticatedUserGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(privateRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateRoutingModule { }
