import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AddtocartService } from '../services/addtocart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  single: any;
  slideOpts = {
    initialSlide: 0,
    speed: 200,
    loop: true,
    autoplay: {
      delay: 2000
}
  };
  constructor(private route: ActivatedRoute, private router: Router,public addtoCart: AddtocartService ) {
     this.route.queryParams.subscribe(params => {
    if (params && params.speacial){
      this.single = JSON.parse(params.speacial);
    }
  }); }

  ngOnInit() {
  }

  addToCart(member){
  this.addtoCart.getCart(this.single);

    this.router.navigate(['cart']);
  }
}

