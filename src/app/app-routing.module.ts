import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login/style-master', pathMatch: 'full' },
  { path: 'login', loadChildren:()=>import('./product/product.module').then(e=>e.ProductModule) },
  { path: 'home', loadChildren:()=>import('./user/user.module').then(e=>e.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
