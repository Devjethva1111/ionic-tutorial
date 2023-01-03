/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  single: any;
  list=[];
  myForm: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder, private alert: AlertController,private router: Router,
    private route: ActivatedRoute) {}


  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
      last_name: ['', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]],
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorCtr() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('data added',this.single);
    if (!this.myForm.valid) {
      console.log('All fields are required.');
      return false;
    }
    // eslint-disable-next-line eqeqeq
    // else if(this.list.length){
    //   this.list.push(this.myForm.value);
    //   console.log(this.myForm.value);
    // }

    else {
      // this.list[this.single] = this.single;
      // this.list.push(this.myForm.value);

      // eslint-disable-next-line eqeqeq
      if(this.single == undefined){
        this.list.push(this.myForm.value);
      }else {
        this.list[this.single] = this.myForm.value;
        this.single = undefined;
      }
    }
    this.myForm.reset();

  }

  async delete(item) {
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
            this.list.splice(this.list.indexOf(item),1);
            console.log('Delete Item');
          },
        },
      ],
    });
    await alert.present();
  }

  async edit(user,index) {
this.single = index;
  this.myForm.setValue({

  name: user.name,
  last_name: user.last_name


});
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     editdata: this.myForm.value,
    //   },
    // };
    // console.log(this.myForm.value);
    // this.router.navigate(['home'], navigationExtras);
  }
  }

