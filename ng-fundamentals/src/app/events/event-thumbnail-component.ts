import { Component,Input, Output,EventEmitter } from "@angular/core";
import { iEvent } from "./shared/event-model";

@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink]="['/event',event.id] " class="well hoverwell thumbnail">
    <h2> Name :{{event?.name | uppercase}}</h2>
    <div>Date :{{event?.date | date}} </div>

    <div [ngClass]="{green :event?.time==='8:00 am' , bold:event?.time ==='8:00 am'}" [ngSwitch]="event?.time">
    Time :{{event?.time}} 
    <span *ngSwitchCase="'8:00 am'" >(Early start)</span> 
    <span *ngSwitchCase="'10:00 am'">(late start)</span> 
    <span *ngSwitchDefault>(Normal Start)</span> 
    </div>
    <div>{{event?.price |currency:'USD'}}</div>
    
    <div><Span>Location :{{event?.location.address}}</Span>
    <span>&nbsp;</span>
    <Span class="pad-left">{{event?.location.city}}  ,{{event?.location.country}}</Span>
    </div>
    <div *ngIf="event?.onlineUrl"> Online:{{event?.onlineurl}}</div>
    
   </div>`,
   styles:[`
   span{}
   .green {color:#003300 !important;}
   .bold {font-weight:bold}
   .thumbnail {min-height:210px}
 .pad-left { margin-left: 10px;}
 .well div{ color: #bbb ;}`]
 
})
export class EventThumbnailcomponent
{
@Input() event:iEvent
// @Output() eventClick=new EventEmitter()
/*    <button class="btn btn-primary" (click)="handleclickme()">Click Me!</button> */
/* handleclickme()
{
    console.log('clicked')
    this.eventClick.emit(this.event.name)
}
 */
}