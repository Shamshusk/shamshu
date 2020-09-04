import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeChildCmComponent } from './home-child-cm/home-child-cm.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [{ path: '', component: HomeChildCmComponent },
{ path: 'test', component: ChildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeChildRoutingModule { }
