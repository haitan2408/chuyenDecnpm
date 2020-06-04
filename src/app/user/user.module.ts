import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { OrderFoodComponent } from './order-food/order-food.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    OrderFoodComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
