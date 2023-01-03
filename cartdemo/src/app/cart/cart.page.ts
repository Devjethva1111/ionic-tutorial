import { AddtocartService } from './../services/addtocart.service';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  addcart = [];

  constructor(private route: ActivatedRoute, private router: Router,public addtoCart: AddtocartService ,
    private modalCtrl: ModalController, private alertCtrl: AlertController) {
   }

  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.addcart= this.addtoCart.cart;
    // this.addtoCart.cart;
    console.log('data added in add cart',this.addcart);

  }

  decreaseCartItem(product) {
    this.addtoCart.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.addtoCart.addProduct(product);
  }

  removeCartItem(product) {
    this.addtoCart.removeProduct(product);
  }

  getTotal() {
    return this.addcart.reduce((i, j) => i + j.discount_price * j.amount, 0);
  }

  async checkout() {
    // Perfom M-pesa, Mastercard, PayPal checkout process

    const cartCount =  this.addcart.length;
    console.log('cart item count: ' + cartCount);

    const alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'Success',
      buttons: ['Success']
    });
    await alert.present();
  }
}
