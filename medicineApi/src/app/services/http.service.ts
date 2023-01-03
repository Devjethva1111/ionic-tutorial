import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { GlobVarService } from './glob-var.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient,public globVar:GlobVarService) { }

  // public GetWithoutToken(url:string):Observable<any>{
  //   return this.http.get<any>(this.globVar.apicall +url).pipe(
  //     map( response =>{
  //       return response
  //     }),
  //     catchError(async (error)=>this.handleErrors(error,this.globVar.apicall + url))
  //   )
  // }

  public PostWithoutToken(url:string,request:any):Observable<any>{
    return this.http.post<any>(this.globVar.apicall + url,request).pipe(
      map( response =>{
        return response
      }),
      catchError(async (error) =>this.handleErrors(error,this.globVar.apicall + url))
    )
  }

  handleErrors(error: HttpErrorResponse, url: string) {
    let errMsg: any;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error} ${err}`;
    } else {
      errMsg = error.error ? error.error : JSON.stringify(error);
    }
    console.log('Response Error:',errMsg.error)
    return throwError(errMsg);   
  }
}
