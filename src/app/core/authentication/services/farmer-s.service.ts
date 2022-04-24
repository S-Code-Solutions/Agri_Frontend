import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FarmerDTO} from "../dto/farmerDTO";

@Injectable({
  providedIn: 'root'
})
export class FarmerSService {
  Url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFiles(value : string| number): Observable<any> {
    return this.http.get<any>(this.Url+'/farmer/search/'+value, {
      headers:new HttpHeaders({

      })
    })
  }

  AddnewUser(farmerDTO: FarmerDTO): Observable<any> {
    return this.http.post(this.Url+'/farmer/registerFarmer', {
      farmer_contact: farmerDTO.farmer_contact,
      farmer_image: farmerDTO.farmer_image,
      farmer_name: farmerDTO.farmer_name,
      farmer_password: farmerDTO.farmer_password,
      fertilizer: farmerDTO.fertilizer,
      status: farmerDTO.status,
      headers:new HttpHeaders({

        // 'Authorization': 'Bearer ' + JSON.parse(this.cookieService.get('token')),
      })
    })
  }
}
