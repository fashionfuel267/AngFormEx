import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  public registerForm:FormGroup ;
isSubmit:boolean=false;
  constructor(){
    this.registerForm=new FormGroup({
      UserName:new FormControl('',Validators.required),
      Password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(5)]),
      EmailAddress:new FormControl('',Validators.required),
      ContactNo:new FormControl('',[Validators.required,Validators.maxLength(15)]),
  })
  }
  ngOnInit(): void {
   
  }
 public get myform(){
    console.log(this.registerForm.controls)
    return this.registerForm.controls;
  }
  onSubmit(){
    this.isSubmit=true;
    console.log(this.registerForm.valid)
    console.log(this.registerForm.value)
  }
 
}
