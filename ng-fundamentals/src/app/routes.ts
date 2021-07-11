import { Routes } from "@angular/router";
import { CreateEventComponent } from "./create-event-component";
import { Sessioncomponent } from "./create-session-component";
import { Error404Component } from "./errors/404-component";
import { EventDetailscompinent } from "./events-details-componet";
import { EventRouteActivator } from "./events/event-activator-router-service";
import { Eventslistcomponent } from "./events/events-list-component";

export const appRoutes:Routes=[
    {path:'events/new',component:CreateEventComponent},
    {path:'404' , component:Error404Component},
    {path:'events',component:Eventslistcomponent},
    {path:'event/:id',component:EventDetailscompinent,canActivate:[EventRouteActivator]},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'user',
    loadChildren: () => import('./user/user-module')
.then(m=>m.userMOdule)
},
    {path:'create-session',component:Sessioncomponent}
]