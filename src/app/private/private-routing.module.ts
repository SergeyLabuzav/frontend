import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedUserGuard } from '../shared/guards/authenticated-user.guard';
import { NoCreatedPregnancyGuard } from '../shared/guards/no-created-pregnancy.guard';
import { CreatePregnancyComponent } from './components/create-pregnancy/create-pregnancy.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const privateRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canLoad: [AuthenticatedUserGuard],
    canActivate: [AuthenticatedUserGuard, NoCreatedPregnancyGuard],
    canActivateChild: [AuthenticatedUserGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'new-pregnancy',
    component: CreatePregnancyComponent,
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
