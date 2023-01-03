import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobVarService } from 'src/app/services/glob-var.service';
import { HttpService } from 'src/app/services/http.service';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public globVar:GlobVarService,public http:HttpService) { }


  public GetData():Observable<any>{
   return this.http.GetWithoutToken('users/2').pipe(
      map( (response:any)=>{
        return response;
      })
    )
  }

}
