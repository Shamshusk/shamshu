import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeChildRoutingModule } from './home-child-routing.module';
import { HomeChildCmComponent } from './home-child-cm/home-child-cm.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    HomeChildRoutingModule
  ],
  declarations: [HomeChildCmComponent, ChildComponent]
})
export class HomeChildModule { }
