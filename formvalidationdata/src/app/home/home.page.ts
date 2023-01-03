import { Component, OnInit } from '@angular/core';
import { GlobVarService } from '../services/glob-var.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public data:any[];

  constructor(public httpData: HomeService, public globVar: GlobVarService) {}
 
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.httpData.GetData().subscribe((response) => {
      if (response.data != "") {
        this.data = response.data;
      }
    });
  }
 
}