/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { GlobVarService } from '../services/glob-var.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  public data: any;
  isenabled: boolean = false;

  constructor(
    private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder,
    public httpData: HomeService, public globVar: GlobVarService,) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'),],],
      last_name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'),],],
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorCtr() {
    return this.myForm.controls;
  }

  async onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All Fields are  required');
      return false;
    } else {
      let navigationExtras: NavigationExtras = {
        state: {
          addData: this.myForm.value,
        },
      };
      // console.log(this.myForm.value);
      this.router.navigate(['home'], navigationExtras);
      this.httpData.GetData(this.myForm.value).subscribe((response) => {
        if (response.data != "") {
          this.data = response.data;
        }
      });
    }
  }
}

