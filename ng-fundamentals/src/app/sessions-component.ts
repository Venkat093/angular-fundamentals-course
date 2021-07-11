import { Component, Input ,OnChanges} from '@angular/core';

import { ISession } from './events/shared/event-model';
@Component({
    selector:'session-list',
    templateUrl: './session-listcomponent.html'
  
})
export class Sessionscomponet implements OnChanges {
    @Input() sessions:ISession[];
    @Input() filterBy:string;
    @Input() sortBy:string;
    visibleSessions :ISession[];
    constructor() { }
    ngOnChanges() {
        if(this.sessions){
            this.filterSessions(this.filterBy);
            this.sortBy==='name' ?this.visibleSessions.sort(sortbyname):this.visibleSessions.sort(sortbyvotes)
        }
        
    }
    filterSessions(filter)
    {
        if(filter==='all')
        {

this.visibleSessions=this.sessions.slice(0)
        }
        else{
            this.visibleSessions=this.sessions.filter(session=> {
                return session.level.toLocaleLowerCase()===filter;
            })
        }
    }
 
}


function sortbyname(s1:ISession,s2:ISession){
    if(s1.name>s2.name) return 1
    else if(s1.name===s2.name) return 0
    else return -1

}

function sortbyvotes(s1:ISession,s2:ISession)
{
    return s2.voters.length - s1.voters.length
}