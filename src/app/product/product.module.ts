import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StyleMasterComponent } from './components/style-master/style-master.component';
import { OrderMasterComponent } from './components/order-master/order-master.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StyleMasterService } from './service/style-master.service'
import { OrderMasterService } from './service/order-master.service'

const routes: Routes = [
  {
    path:  '',
    component:  NavBarComponent,
      children: [
      {
        path:  'style-master',
        component:  StyleMasterComponent
      },
      {
        path:  'order-master',
        component:  OrderMasterComponent
      }
    ]
  }
];

@NgModule({
  declarations: [StyleMasterComponent, OrderMasterComponent, NavBarComponent],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StyleMasterService, OrderMasterService]
})
export class ProductModule { }
