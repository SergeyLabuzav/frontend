import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { ProgressRingComponent } from '../public/components/progress-ring/progress-ring.component';
import { SecurityInterceptor } from '../shared/http/security-interceptor';
import { PrivateRoutingModule } from './private-routing.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePregnancyComponent } from './components/create-pregnancy/create-pregnancy.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [NavBarComponent, HomeComponent, CreatePregnancyComponent, DashboardComponent, ProgressRingComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrivateRoutingModule,
    FormsModule
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
