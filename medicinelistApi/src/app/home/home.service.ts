import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobVarService } from '../services/glob-var.service';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public globVar:GlobVarService,public http:HttpService) { }

  public Infinity(result):Observable<any>{
   return this.http.PostWithoutToken('?page='+result,'Medic').pipe(
      map( (response:any)=>{
        return response;
      })
    )
  }

}
