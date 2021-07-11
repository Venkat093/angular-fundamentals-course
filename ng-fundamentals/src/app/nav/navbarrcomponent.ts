import { Component } from '@angular/core';
import { ISession } from '../events/shared/event-model';
import { EventServices } from '../events/shared/event-services';
import { AuthService } from '../user/auth-service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbarcomponent.html',
    styles:[`
    .nav.navbar-nav {font-size:15px}
    #searchForm {margin-right:100px}
    @media (max-width:1200px) {#searchForm {display:none}}
    li > a.active{color:#F97924;}
    `]
    
})
export class Navbarcomponent  {
    searchterm: string="";
    foundSessions:ISession[];
    searchSessions(searchterm)
    {
           this.eventserviec.searchsessions(this.searchterm).subscribe(sessions=>{this.foundSessions=sessions;
            console.log(this.foundSessions)
        })
    }
    constructor(public auth:AuthService,private eventserviec:EventServices)
{
    
} 

}
