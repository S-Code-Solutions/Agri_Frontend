import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProductDTO} from "../dto/productDTO";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProductDetails(): Observable<any> {
    return this.http.get<any>(this.Url+'/product/searchAll', {
      headers:new HttpHeaders({

      })
    })
    // return ({
    //   productStore : [
    //     {
    //       name: 'Photos',
    //       updated: '1/1/16',
    //       desc: 'Photos1 desc',
    //       src:'https://i.ibb.co/51TzzBG/vege8.jpg'
    //     },
    //     {
    //       name: 'Photos',
    //       updated: '1/1/16',
    //       desc: 'Photos1 desc',
    //       src:'https://i.ibb.co/w6mPQch/ezgif-com-gif-maker-4.jpg'
    //     },
    //     {
    //       name: 'Photos',
    //       updated: '1/1/16',
    //       desc: 'Photos1 desc',
    //       src:'https://i.ibb.co/GdKBy5R/ezgif-com-gif-maker-5.jpg'
    //     },
    //     {
    //       name: 'Photos',
    //       updated: '1/1/16',
    //       desc: 'Photos1 desc',
    //       src:'https://i.ibb.co/hcsn5H9/vege7.jpg'
    //     },
    //     {
    //       name: 'Photos',
    //       updated: '1/1/16',
    //       desc: 'Photos1 desc',
    //       src:'https://i.ibb.co/fCwzMzt/vege5.jpg'
    //     },
    //     {
    //       name: 'Photos',
    //       updated: '1/1/16',
    //       desc: 'Photos1 desc',
    //       src:'https://i.ibb.co/r5vV9gS/vege6.jpg'
    //     },
    //     {
    //       name: 'Photos',
    //       updated: '1/1/16',
    //       desc: 'Photos1 desc',
    //       src:'https://i.ibb.co/xG429NT/vege3.jpg'
    //     },
    //     {
    //       name: 'Photos',
    //       updated: '1/1/16',
    //       desc: 'Photos1 desc',
    //       src:'https://i.ibb.co/kgrthKs/vege1.jpg'
    //     },
    //   ]
    // })
  }

  saveProduct(productDTO: ProductDTO): Observable<any> {
    return this.http.post(this.Url+'/product/saveProduct', {
      farmer_contact: productDTO.farmer_contact,
      farmer_name: productDTO.farmer_name,
      product_desc: productDTO.product_desc,
      product_img: productDTO.product_img,
      product_price: productDTO.product_price,
      product_title: productDTO.product_title,
      status: productDTO.status,
      fertilizer: productDTO.fertilizer,

      headers:new HttpHeaders({

        // 'Authorization': 'Bearer ' + JSON.parse(this.cookieService.get('token')),
      })
    })
  }

  getProductDtail(value : any): Observable<any> {
    return this.http.get<any>(this.Url+'/product/search/'+value, {
      headers:new HttpHeaders({

      })
    })
  }
}
