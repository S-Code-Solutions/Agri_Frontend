import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpertsService {
  Url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFiles(value : string| number): Observable<any> {
    return this.http.get<any>(this.Url+'/expert/search/'+value, {
      headers:new HttpHeaders({

      })
    })
  }
}
