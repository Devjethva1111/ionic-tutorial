/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { GlobVarService } from '../services/glob-var.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  
  single1: any;
  public data: any;
  myForm: FormGroup;
  submitted = false;
  defaultDate = '';
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  isenabled: boolean = false;

  constructor(
    private route: ActivatedRoute,private router: Router,public formBuilder: FormBuilder,
    public httpData: HomeService, public globVar: GlobVarService) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.speacial) {
        this.single1 = JSON.parse(params.speacial);
      }
    });
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      first_name: [
        this.single1.first_name,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*'),],],
      last_name: [
        this.single1.last_name,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*'),],],
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorCtr() {
    return this.myForm.controls;
  }

  async onEdit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All Fields are  required');
      return false;
    } else {
      // eslint-disable-next-line prefer-const
      let navigationExtras: NavigationExtras = {
        state: {
          editdata: this.myForm.value,
        },
      };
      this.router.navigate(['home'], navigationExtras);
      this.httpData.EditData(this.myForm.value).subscribe((response) => {
        if (response.data != "") {
          this.data = response.data;
        }
      });
    }
  }
}


