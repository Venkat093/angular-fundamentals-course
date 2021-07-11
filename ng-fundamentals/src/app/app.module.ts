import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Collapsiblecomponent } from './common/collapsible-well-component';
import { CreateEventComponent } from './create-event-component';
import { Sessioncomponent } from './create-session-component';
import { Error404Component } from './errors/404-component';
import { EventDetailscompinent } from './events-details-componet';
import { EventRouteActivator } from './events/event-activator-router-service';
import { EventThumbnailcomponent } from './events/event-thumbnail-component';
import { Eventslistcomponent } from './events/events-list-component';
import { DuratiionPipe } from './events/shared/duration.pipes';
import { EventServices } from './events/shared/event-services';

import { Navbarcomponent } from './nav/navbarrcomponent';

import { appRoutes } from './routes';
import { Sessionscomponet } from './sessions-component';
import { AuthService } from './user/auth-service';
import {JQ_TOKEN} from './common/index';
import { modelcomponent } from './common/model-component';
import { MOdeltrigger } from './common/modal-trigger-directive';

let jQuery=window['$'];

@NgModule({
  declarations: [
    AppComponent,
    Eventslistcomponent,
    EventThumbnailcomponent,
    Navbarcomponent,
    EventDetailscompinent,
    CreateEventComponent,
    Error404Component,
    Sessioncomponent,
    Sessionscomponet,
    Collapsiblecomponent,
    DuratiionPipe,
    modelcomponent,
    MOdeltrigger
    
   
    
  ],
  providers:[EventServices,EventRouteActivator,AuthService,
    {provide:JQ_TOKEN,useValue:jQuery}
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
