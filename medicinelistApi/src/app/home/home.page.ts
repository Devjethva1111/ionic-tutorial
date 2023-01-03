import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { GlobVarService } from '../services/glob-var.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  users :any[] = [];
  page = 1;
  size = 10;
  public data1: any;
  maximumPages = 100;

  constructor(private loadingCtrl: LoadingController,public navCtrl: NavController,  
    public httpData: HomeService, public globVar: GlobVarService) {
    this.loadUsers();
  }
  async ngOnInit() {
    // const loading = await this.loadingCtrl.create({
    //   message: 'Loading...',
    //   duration: 3000,
    //   spinner: 'circles'
    // });
    // loading.present();
  }
  loadUsers(infiniteScroll?) {
    this.httpData.Infinity(this.page).subscribe((res) => {
      this.users = this.users.concat(res['data1']);
      console.log(this.users);
      if (infiniteScroll) {
        infiniteScroll.target.complete();
    }
    });
  }
 
  loadMore(infiniteScroll) {
    this.page++;
    this.loadUsers(infiniteScroll);
    console.log('Page',this.page);
 
    if (this.page === this.maximumPages) {
      infiniteScroll.target.disabled = true;
    }
  }

}
