import { PeopleServiceService } from './../services/people-service.service';
import { CardService } from './../services/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // card: any
  public card: any;
  // public people: any;

  constructor(public cardservice: CardService, public peopleservice: PeopleServiceService) {}
  // loadPeople() {
  //   console.log('data');
  // //   this.cardservice.load().then((data) => {
  // // this.people = data;
  // //   });
  // }

  ngOnInit(): void {

    // // Get the information from the API
    // this.cardservice.getDetails().subscribe(result => {
    //   console.log(result);
    //   this.card = result;
    //   console.log(this.card);
    // });

     // Get the information from the API
    this.cardservice.getDetails().subscribe(result => {
      console.log(result);
      this.card = result;
      console.log(this.card);
    });
  }

}
