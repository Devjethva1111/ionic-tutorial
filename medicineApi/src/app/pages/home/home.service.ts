import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobVarService } from 'src/app/services/glob-var.service';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private api = 'medicinelist?page='

  constructor(public globVar:GlobVarService,public http:HttpService) { }

  public Infinity(result):Observable<any>{
   return this.http.PostWithoutToken(this.api+result,'Medic').pipe(
      map((response:any)=>{
        return response;
      })
    )
  }

}
