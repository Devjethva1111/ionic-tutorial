import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
// url = 'https://reqres.in/api/users/2';
//   url = 'https://randomuser.me/api/';
// url = 'https://www.fishwatch.gov/api/species';

      url2 = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

// getDetails() {
//     return this.http.get(`${this.url}`);
//   }

getDetails() {
      return this.http.get(`${this.url2}`);
    }

}


