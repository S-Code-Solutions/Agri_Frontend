import { Injectable } from '@angular/core';
import {UserDTO} from "../dto/userDTO";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class SubUserService {
  Url = environment.baseUrl;
  cookieValues :any

  constructor(private http: HttpClient,private cookieService: CookieService) { }

  UpdateUser(userDTO: UserDTO): Observable<any> {
    this.cookieValues = JSON.parse(this.cookieService.get('Arr'));
    return this.http.put(this.Url+'/farmer/updateFarmer', {
      farmer_id : userDTO.farmer_id,
      farmer_contact: userDTO.farmer_contact,
      farmer_image: userDTO.farmer_image,
      farmer_name: userDTO.farmer_name,
      farmer_password: userDTO.farmer_password,
      fertilizer: userDTO.fertilizer,
      status: userDTO.status,
      headers:new HttpHeaders({

        // 'Authorization': 'Bearer ' + JSON.parse(this.cookieService.get('token')),
      })
    })
  }

  getFiles(farmer_id:any): Observable<any> {
    return this.http.get<any>(this.Url+'/farmer/search/'+farmer_id, {
      headers:new HttpHeaders({

      })
    })
  }
}
