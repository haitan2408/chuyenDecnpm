import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFoodComponent } from './order-food/order-food.component';

const userRoutes: Routes = [
  {
    path:"order-food",component: OrderFoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
