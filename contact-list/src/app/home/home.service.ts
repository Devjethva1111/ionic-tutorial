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

  public GetData(datas):Observable<any>{
   return this.http.PostWithoutToken('users', datas).pipe(
      map( (response:any)=>{
        return response;
      })
    )
  }

  public EditData(datas):Observable<any>{
   return this.http.PUT('users/2', datas).pipe(
      map( (response:any)=>{
        return response;
      })
    )
  }

  public DeleteData(datas):Observable<any>{
   return this.http.DELETE('users/2', datas).pipe(
      map( (response:any)=>{
        return response;
      })
    )
  }
}
