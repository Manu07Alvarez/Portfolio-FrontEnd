import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
