import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth-service';

@Component({
    templateUrl: './profilecomponent2.html',
    styles:[
        `
        em {float:right;color:#E05C65;padding-left:10px;}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {color:#999;} 
        .error ::-moz-placeholder{color :#999;}
        .error : ms-input-placeholder {color:#999;}       
        `
    ]
})
export class profile implements OnInit {
    constructor(private authservice:AuthService,private router:Router) { }
    
 profileform:FormGroup
 private firstname:FormControl
 private lastname:FormControl

    ngOnInit() {

         this.firstname=new FormControl(this.authservice.currentUser.firstname,[Validators.required,Validators.pattern('[a-zA-Z].*')])
         this.lastname=new FormControl(this.authservice.currentUser.lastname)
        this.profileform= new FormGroup({
            firstname:this.firstname,
            lastname:this.lastname
        })

    }
    cancel()
    {
        this.router.navigate(['events'])
    }
    save(formvalues)
    {
        if(this.profileform.valid){
        this.authservice.updatecurentuser(formvalues.firstname,formvalues.lastname)
        this.router.navigate(['events'])
        }
    }
    validateLastname(){
      return this.lastname.invalid || this.lastname.touched
    }
    validatefirstname(){
        return this.firstname.invalid || this.firstname.touched
      }
}

