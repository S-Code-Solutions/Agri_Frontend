import { Injectable } from '@angular/core';
import {ProblemDTO} from "../dto/problemDTO";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie";
import {CommentDTO} from "../dto/commentDTO";

@Injectable({
  providedIn: 'root'
})
export class SubFProblemsService {
  Url = environment.baseUrl;
  cookieValues :any

  constructor(private http: HttpClient) { }

  addComponent(problemDTO: ProblemDTO): Observable<any> {
    return this.http.post(this.Url+'/problem/saveProblem', {
      problem_title: problemDTO.problem_title,
      problem_desc: problemDTO.problem_desc,
      farmer_name: problemDTO.farmer_name,
      farmer_image: problemDTO.farmer_image,
      // status: 'active',
      headers:new HttpHeaders({

        // 'Authorization': 'Bearer ' + JSON.parse(this.cookieService.get('token')),
      })
    })
  }

  getProblemDetails(): Observable<any> {
    // this.cookieValues = JSON.parse(this.cookieService.get('Arr'));
    return this.http.get<any>(this.Url+'/problem/searchAll', {
      headers:new HttpHeaders({

      })
    })
  }

  getAllComments(accident_Id: any):Observable<any>  {
    return this.http.get<any>(this.Url+'/comment/getAllComments/'+accident_Id, {
      headers:new HttpHeaders({

      })
    })
  }

  addComment(commentDTO: CommentDTO):Observable<any>  {
    return this.http.post(this.Url+'/comment/AddComment', {
      comment_desc: commentDTO.comment_desc,
      status: commentDTO.status,
      expert_name: commentDTO.expert_name,
      expert_img: commentDTO.expert_img,
      problem_id: commentDTO.problem_id,
      headers:new HttpHeaders({

      })
    })
  }
}
