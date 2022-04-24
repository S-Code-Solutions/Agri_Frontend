import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie";
import {SubFProblemsService} from "../../services/sub-fproblems.service";
import {ProblemDTO} from "../../dto/problemDTO";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Subscription} from "rxjs";
import {CommentDTO} from "../../dto/commentDTO";

@Component({
  selector: 'app-sub-fproblems',
  templateUrl: './sub-fproblems.component.html',
  styleUrls: ['./sub-fproblems.component.scss']
})
export class SubFproblemsComponent implements OnInit {

  fieldArray: Array<any> = [];
  newAttribute: any = {};
  itemDetailsForm!: FormGroup;
  cookieValues :any
  FarmForm=false;
  CmtForm=false;
  cookieValue :any
  addCommentForm!: FormGroup;

  constructor(private cookieService: CookieService,
              private subFProblemsService:SubFProblemsService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.itemDetailsForm = new FormGroup({
      problem_title: new FormControl('', [
        Validators.required
      ]),
      problem_desc: new FormControl('', [
        Validators.required,
      ]),
      farmer_name: new FormControl('', [
        Validators.required,
      ]),
      farmer_image: new FormControl('', [
        Validators.required,
      ])
    });
    this.addCommentForm = new FormGroup({
      comment_desc: new FormControl('', [
        Validators.required
      ]),
    });
    this.formView();
    this.setFields();
    this.GetAllProblems();
  }

  formView(){
    this.cookieValue = this.cookieService.get('User');
    if (this.cookieValue == 'Farmer'){
      this.FarmForm=true;
      this.CmtForm= false;
    }else{
      this.FarmForm=false;
      this.CmtForm= true;
    }
  }

  setFields(){
    this.cookieValues = JSON.parse(this.cookieService.get('Arr'));
    console.log("cookie values")
    console.log(this.cookieValues)
    if (this.cookieValue == 'Farmer'){
    this.itemDetailsForm.setValue({
      problem_title:'',
      problem_desc:'',
      farmer_name :this.cookieValues.farmer_name,
      farmer_image:this.cookieValues.farmer_image,
    })
    }else {
      this.itemDetailsForm.setValue({
        problem_title:'',
        problem_desc:'',
        farmer_name :'',
        farmer_image:'',
      })
    }
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
    console.log(this.fieldArray);
  }



  saveProblem() {
    this.subFProblemsService.addComponent(new ProblemDTO(
      this.itemDetailsForm.get('problem_title')?.value,
      this.itemDetailsForm.get('problem_desc')?.value,
      this.itemDetailsForm.get('farmer_name')?.value,
      this.itemDetailsForm.get('farmer_image')?.value
    )).subscribe(res=>{
      console.log(res)

      if (res.code==='201'){
        this.openSnackBar();
        this.setFields();
        this.GetAllProblems();
      }else{
        this.openFalureSnackBar();
      }
    });
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  openSnackBar(){
    this._snackBar.open('Successfully Added!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['green-snackbar', 'login-snackbar']
    });
  }

  openFalureSnackBar(){
    this._snackBar.open('Adding Unsuccessful!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['red-snackbar', 'login-snackbar']
    });
  }

  private allComponentsSub2!: Subscription;
  private allComponentsSub3!: Subscription;
  serviceProblems! :any[];
  serviceComments! :any[];
  panelOpenState = false;


  GetAllProblems(){
    this.allComponentsSub2 = this.subFProblemsService.getProblemDetails().subscribe(result => {
      console.log("serviceProblems")
      this.serviceProblems = result.data;
      console.log(this.serviceProblems)
    }, error => {
      console.log(error);
    });
  }

  GetAllComments(problem_id: any) {
    this.allComponentsSub3 = this.subFProblemsService.getAllComments(problem_id).subscribe(result => {
      console.log(result.data)
      this.serviceComments = result.data;
    }, error => {
      console.log(error);
    });
  }

  submitComment(problem_id: any) {
    const userVal ="active"
    this.subFProblemsService.addComment(new CommentDTO(
      this.addCommentForm.get('comment_desc')?.value,
      userVal,
      this.cookieValues.expert_name,
      this.cookieValues.expert_img,
      problem_id
    )).subscribe(res=>{
      console.log(res)
      if (res.code==='201'){
        this.addCommentForm.setValue({
          comment_desc:''
        });
        this.openSnackBar();
      }else{
        this.addCommentForm.setValue({
          comment_desc:''
        });
        this.openFalureSnackBar();
      }
    });
  }

  currentOpenedItemId!: any;

  public handleOpened(item: any): void {
    this.currentOpenedItemId = item;
  }

}
