import { Component } from '@angular/core';
import { EventServices } from './events/shared/event-services';
import { ActivatedRoute } from '@angular/router';
import { iEvent, ISession } from './events/shared/event-model';

@Component({
  selector: 'events-app',
  templateUrl: './eventdetails-component.html',
  styles:[`
  .container :{padding-left:20px; padding-right:20px}
  .img-event {height:100px;}
  a {cursor:pointer;}
  `]

})
export class EventDetailscompinent {
  event:iEvent;
  addmode: boolean;
  filterBy:string='all';
  sortBy:string='name';

  constructor(private eventservice :EventServices,private route:ActivatedRoute)
  {
 
  }
  ngOnInit()
  {
 this.event=this.eventservice.getevent(+this.route.snapshot.params['id'])
  }


 

}
