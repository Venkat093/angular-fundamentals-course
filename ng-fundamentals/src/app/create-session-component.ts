import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISession } from './events/shared/event-model';

@Component({  
    selector:'create-session',
    templateUrl: './create-session-component.html',

})
export class Sessioncomponent implements OnInit {
    
    name: FormControl;
    presenter: FormControl;
    newSessionForm: FormGroup;
    level: FormControl;
    duration: FormControl;
    abstract: FormControl;
    constructor(private router:Router) { }

    ngOnInit(): void {
        this.name=new FormControl('',Validators.required)
        this.presenter=new FormControl('',Validators.required)
        this.duration=new FormControl('',Validators.required)
        this.level=new FormControl('',Validators.required)
        this.abstract=new FormControl('',[Validators.required,Validators.maxLength
        (400)])

        this.newSessionForm=new FormGroup({
            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract

        })
        
     }
     saveSession(FormValues)
     {
               console.log(FormValues)
               let session:ISession={
                   id:undefined,
                   name:FormValues.name,
                   duration:+FormValues.duration,
                   level:FormValues.level,
                   presenter:FormValues.presenter,
                   abstract:FormValues.abstract,
                   voters:[]
               }
               this.router.navigate(['/allevents'])
               console.log(FormValues)
     }
    
}
