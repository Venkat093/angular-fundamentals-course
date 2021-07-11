import {Component} from '@angular/core'
import { Router } from '@angular/router'
import { EventServices } from './events/shared/event-services'


@Component({
    templateUrl:'./create-event-component.html' ,
    styles:[
        `
        em {float:right;color:#E05C65;padding-left:0px}
        .error input {background-color:##E3C3C5;}
        .error ::-webkit-input-placeholder {color:#999;}
        .error : -moz-placeholder {color:#999;}
        .error :: -moz-placeholder {color:#999;}
        .error :ms-input-placeholder {#999; }

        `
    ]
})
export class CreateEventComponent{
    newEvent:any
    isDirty: boolean
constructor(private router:Router , private eventService:EventServices)
{
    
}
cancel()
{
    this.router.navigate(['/events'])
}
saveEvent(formValues)
{
    this.eventService.saveEvent(formValues)
console.log(formValues)
this.isDirty =false
this.router.navigate(['/events'])
}
ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
/*     
    this.newEvent={
        name: 'Ng Spectacular',
        date :'7/7/2027',
        time:'10am',
        price: 799.99,
        location:{
            address:"gopalenagr",
            city:'ongole',
            country:'India'
        },
        onlineUrl:'http://asdfghjkl.com',
        imageUrl:'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7.png'
    } */
}
}