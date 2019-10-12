import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationComponent } from './public/activation/activation.component';
import { LoginComponent } from './public/login/login.component';
import { RegistrationComponent } from './public/registration/registration.component';
import { AnonymousUserGuard } from './shared/guards/anonymous-user.guard';
import { ActivationResolver } from './shared/resolver/activation.resolver';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canLoad: [AnonymousUserGuard],
    canActivate: [AnonymousUserGuard]
  },
  {
    path: 'create-new-account',
    component: RegistrationComponent,
    canActivate: [AnonymousUserGuard]
  },
  {
    path: 'activate',
    component: ActivationComponent,
    canActivate: [AnonymousUserGuard],
    resolve: {
      isActivated: ActivationResolver
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    AnonymousUserGuard,
    ActivationResolver]
})
export class AppRoutingModule {
}
