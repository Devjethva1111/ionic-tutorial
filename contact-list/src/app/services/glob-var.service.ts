import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobVarService {

  public apiurl:string = 'https://reqres.in/api/';
  public apikey:string = '&key=123456';
  public userToken:any;
  public prescriptionImages: Array<any> = [];

  constructor() { }
}
