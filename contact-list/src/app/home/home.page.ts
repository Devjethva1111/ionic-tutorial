import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { HomeService } from './home.service';
import { GlobVarService } from '../services/glob-var.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public data: any;
  items: any;
  searching = false;
  index: any;
  editdata: any;
  list: any[] = [];

  private loading;

  constructor(
    private alert: AlertController,private router: Router,private route: ActivatedRoute,
    private loadingCtrl: LoadingController,public httpData: HomeService, public globVar: GlobVarService) {

    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        const add = this.router.getCurrentNavigation().extras.state.addData;
        // console.log('Add data', add);
        const edit = this.router.getCurrentNavigation().extras.state.editdata;
        // console.log('Edit data', edit);
        if (add !=   undefined) {
          this.list.push(add);
        } else {
          // console.log('Value added', this.index);
          this.list[this.index] = edit;
        }
      }
    });
    this.initializeItems()
  }

ngOnInit(){
}

// Delete Function
  async delete(indexes) {
    // console.log('Delete Item');
    const alert = await this.alert.create({
      header: 'Are you sure',
      message: 'Do you want to delete',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
        },
        {
          text: 'Okay',
          handler: () => {
            this.list.splice(indexes, 1);
            this.httpData.DeleteData(indexes).subscribe((response1) => {
              if (response1 != "") {
                this.data = response1;
              }
            });
          },
        },
      ],
    });
    await alert.present();
  }

  // Edit Function
  edit(index, item) {
    // console.log('Edit Slide work',);
    const index1 = this.list.indexOf(item);
    this.index = index;
    // console.log('index check', index);
    const navigationEdit: NavigationExtras = {
      queryParams: {
        speacial: JSON.stringify(item),
      },
    };
    this.router.navigate(['edit'], navigationEdit);
  }

  add() {
    // console.log('Add Slide work');
    const navigationAdd: NavigationExtras = {};
    this.router.navigate(['add'], navigationAdd);
  }

  doRefresh(event) {
    // console.log('Begin async operation');
    this.loadingCtrl.create({
      message: 'Loading.....'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
      console.log('Loader is running');
    });

    setTimeout(() => {
      this.loading.dismiss();
      console.log('Loader is not running');
      console.log('Async operation has ended');
      event.target.complete();
    },3000);
  }

  initializeItems(){
    this.items= this.list;
  }
  toggleSearch(ev: any){
this.initializeItems();

const val =ev.target.value;
if(val && val.trim() != ''){
  // eslint-disable-next-line arrow-body-style
  this.items = this.items.filter((item) => {
    return item.first_name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.last_name.toLowerCase().indexOf(val.toLowerCase()) > -1
  })
}
  }
  // Detail Function
  detail(member) {
    const index = this.list.indexOf(member);

    const navigationAdd: NavigationExtras = {
      queryParams: {
        speacial: JSON.stringify(member),
      },
    };
    this.router.navigate(['details'], navigationAdd);
  }
}
