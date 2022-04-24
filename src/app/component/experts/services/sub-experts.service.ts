import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubExpertsService {
  Url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getExpertDetails(): Observable<any> {
    return this.http.get<any>(this.Url+'/expert/searchAll', {
      headers:new HttpHeaders({

      })
    })
  }
}
