import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCantentComponent } from './home-cantent/home-cantent.component';


const routes: Routes = [{ path: '', component: HomeCantentComponent },
{
  path: 'load-child-home', loadChildren: './home-cantent/home-child/home-child.module#HomeChildModule'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
