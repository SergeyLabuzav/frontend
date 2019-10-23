import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecurityInterceptor } from '../shared/http/security-interceptor';
import { PrivateRoutingModule } from './private-routing.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePregnancyComponent } from './components/create-pregnancy/create-pregnancy.component';



@NgModule({
  declarations: [NavBarComponent, HomeComponent, CreatePregnancyComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrivateRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class PrivateModule { }
