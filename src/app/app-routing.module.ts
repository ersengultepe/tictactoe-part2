import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XoxComponent } from './components/xox/xox.component';

const routes: Routes = [
  {
    path: "",
    component: XoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
