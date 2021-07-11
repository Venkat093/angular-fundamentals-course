
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventServices } from './shared/event-services';


@Injectable()
export class EventRouteActivator
{
    constructor(private eventService:EventServices,private route:Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
 const eventExists= !!this.eventService.getevent(+route.params['id'])
   if(!eventExists)
       this.route.navigate(['/404'])
   return eventExists

}
}
