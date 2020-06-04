import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getOrders(): Observable<any> {
    return this.firestore.collection('oder').snapshotChanges();
  }
  getOrder(): Observable<any> {
    return this.firestore.collection('oder').get();
  }
  deleteOrder(foodId: string){
    this.firestore.doc('order/' + foodId).delete();
  }
  createOrder(order: any){
    return this.firestore.collection('order').add(order);
  }
  updateOrder(order: any){
    delete order.id;
    this.firestore.doc('foods/' + order.id).update(order);
  }
}
