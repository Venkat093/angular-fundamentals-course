import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { iEvent } from "./shared/event-model";
import { EventServices } from "./shared/event-services";

@Component({
    // selector:' event-list',
    templateUrl:'./events-lists-component.html'  
})


export class Eventslistcomponent implements OnInit
{
  events :iEvent[];
constructor(private eventservices:EventServices, private router:Router)
{
      
}
create(){
  this.router.navigate(['/create-session'])
}
    /* handleEventClicked(data){
        console.log('recieved :' ,data)
    } */
    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
      this.events=this.eventservices.getevents();
    }
    }

