import { OnInit } from '@angular/core';
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AddtocartService } from '../services/addtocart.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  cart = [];
  products = [
    {
      id : 1,
      // eslint-disable-next-line max-len
      image: 'https://m.media-amazon.com/images/I/71kfaDSxHzL._SX679_.jpg',
      image1: 'https://m.media-amazon.com/images/I/710nxlkN5TL._SX679_.jpg',
      image2: 'https://m.media-amazon.com/images/I/71mBCtiMkWS._SX679_.jpg',
      image3: 'https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg',
      image4: 'https://m.media-amazon.com/images/I/71cz4pacl2L._SX679_.jpg',
      name: 'OPPO A31 ',
      fullname: 'OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
      Model_name: 'CPH2015',
      Form_factor: 'Smartphone',
      Memory_Storage_Capacity:'128 GB',
      price: 14990,
      amount: 1,
      About: '12+2+2MP triple rear camera (12MP main camera+2MP macro lens+2MP depth camera) with Portrait bokeh, macro lens, dazzle color mode, AI beautification | 8MP front camera.',
      discount_price: 11990,
    }, {
      id : 2,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/41xssMLI2DL._SY445_SX342_QL70_FMwebp_.jpg',
      image1: 'https://m.media-amazon.com/images/I/81hB-X3SMtL._SX679_.jpg',
      image2: 'https://m.media-amazon.com/images/I/81UBryv7mOL._SX679_.jpg',
      image3: 'https://m.media-amazon.com/images/I/81tJbh5cAXL._SX679_.jpg',
      image4: 'https://m.media-amazon.com/images/I/719M6YlOXTL._SX679_.jpg',
      name: 'IPhone 12',
      price: 69450,
      discount_price: 65000,
      fullname: 'Apple iPhone 12 (128GB) - Blue',
      Model_name: 'IPhone 12 128GB Blue',
      Form_factor: 'SmartPhone',
      amount: 1,
      Memory_Storage_Capacity:'128 GB',
      About: '12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
    }, {
      id : 3,
      image1: 'https://m.media-amazon.com/images/I/51a8aTEwf3L._SX679_.jpg',
      image: 'https://m.media-amazon.com/images/I/71jzjfmLGQL._SX679_.jpg',
      image2: 'https://m.media-amazon.com/images/I/61LWeIkgCsL._SX679_.jpg',
      image3: 'https://m.media-amazon.com/images/I/51jQbGTW6GL._SX679_.jpg',
      image4: 'https://m.media-amazon.com/images/I/41nW9m2qbPL._SX679_.jpg',
      name: 'vivo X60 ',
      amount: 1,
      price: 42299,
      discount_price: 40000,
      fullname: 'Vivo X60 (Shimmer Blue, 8GB RAM, 128GB Storage)',
      Model_name: 'Vivo X60 ',
      Form_factor: 'SmartPhone',
      Memory_Storage_Capacity:'128 GB',
      About: '48MP+13MP+13MP Rear Camera | 32MP Selfie Camera',

    }, {
      id : 4,
      image: 'https://m.media-amazon.com/images/I/61i8Vjb17SL._SX679_.jpg',
      image1: 'https://m.media-amazon.com/images/I/71rswJs9W9L._SX679_.jpg',
      image2: 'https://m.media-amazon.com/images/I/81DzfVDR-lL._SX679_.jpg',
      image3: 'https://m.media-amazon.com/images/I/7161nwSVX9L._SX679_.jpg',
      image4: 'https://m.media-amazon.com/images/I/61F2F2cZ0OL._SX679_.jpg',
      name: 'IPhone 13 Pro Max',
      price: 139900,
      discount_price: 130000,
      amount: 1,
      fullname: 'Apple iPhone 13 (128GB) - Starlight',
      Model_name: 'Apple',
      Form_factor: 'Smartphone',
      Memory_Storage_Capacity:'128 GB',
      About: '12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',

    }
  ];

  constructor( private router: Router,
    private route: ActivatedRoute,public addtoCart: AddtocartService) {}

  ngOnInit(){
  }

  // Detail Function
  detail(member) {
    // const index = this.products.indexOf(member);

    const navigationAdd: NavigationExtras = {
      queryParams: {
        speacial: JSON.stringify(member),
      },
    };
    this.router.navigate(['details'], navigationAdd);
  }
  addToCart(member){
    this.addtoCart.getCart(member);
    // this.addtoCart.getCart(this.single);

    this.router.navigate(['cart']);
  }
}
