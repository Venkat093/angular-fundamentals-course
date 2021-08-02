import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';
import { routes } from './router';
import { viewbook } from './viewbook/viewbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { AddingbookComponent } from './addingbook/addingbook.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewComponent,
    viewbook,
    EditbookComponent,
    AddingbookComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
