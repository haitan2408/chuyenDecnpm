import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/service/food.service';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.css']
})
export class OrderFoodComponent implements OnInit {

  constructor(private foodService: FoodService, private OrderService: OrderService, private router: Router) { }
  foods: any;
  listFoodOfOder: any[] = [];
  newOrder: Order = new Order();

  ngOnInit(): void {
    this.getFoods();
  }
  getFoods() {
    this.foodService.getFoods().subscribe(result => {
      this.foods = result.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
          quatity: 1,
          isOrder: false
        };
      });
      console.log(this.foods);
    });
  }
  order(id: string, i: number) {
    this.listFoodOfOder.push({id:id,quatity:this.foods[i].quatity});
    this.foods[i].isOrder = true;
  }
  cancelOrder(id: string, i: number) {
    this.listFoodOfOder.splice(i, 1);
    this.foods[i].isOrder = false;
  }
  finish() {
    if (this.listFoodOfOder.length != 0) {
      this.OrderService.createOrder({ foodId: this.listFoodOfOder, people: 6 });
    }
    this.router.navigateByUrl("/user");
  }

}
