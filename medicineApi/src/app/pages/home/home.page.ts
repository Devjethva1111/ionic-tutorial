import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { GlobVarService } from 'src/app/services/glob-var.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public users: any[] = [];
  public page = 1;
  public limit = 10;
  public data1: any;
  private maximumPages = 0;

  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController,public router: Router,
    public httpData: HomeService, public globVar: GlobVarService,public toastController: ToastController) {
    this.loadUsers();
  }

  // Refresh page
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 3000);
  }

  // Reorder Data
  onRenderItems(event){
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);

    const draggedItem = this.users.splice(event.detail.from, 1)[0];  
    this.users.splice(event.detail.to, 0, draggedItem);  
    event.detail.complete();  
  }


  loadUsers(infiniteScroll?) {
    // Reorder data
    this.onRenderItems;

    // Create Loading Funcation
    this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: null,
      cssClass: 'custom-loading'
    }).then((loading) => {
      loading.present();

      // Create SetTimeout Function
      setTimeout(async () => {
        loading.dismiss();

        // Call And Show Api Data 
        this.httpData.Infinity(this.page).subscribe((res) => {
          this.page++
          this.users = this.users.concat(res?.response?.data);
          this.maximumPages = res?.response?.last_page;
          console.log("Maximum Pages", this.maximumPages);
          console.log(this.users);
          if (infiniteScroll) {
            infiniteScroll.target.complete();
          }
        });
      }, 3000)
    })
  }

  async loadMore(event) {
    // this.page++;
    this.loadUsers(event);
    console.log('Page', this.page);

    // page and limit condition merge
    if (this.page === this.maximumPages || this.limit === this.maximumPages) {
      event.target.disabled = true;
    }
    /* Limit condition 
    if (this.limit === this.maximumPages) {
      infiniteScroll.target.disabled = true;
    } */
  }

  Funcation(){
    this.router.navigate(['uploadpage']);
  }
}
