import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrivateRoutingModule } from './private-routing.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [NavBarComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
