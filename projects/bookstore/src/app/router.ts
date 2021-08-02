import { Routes } from "@angular/router";
import { AddingbookComponent } from "./addingbook/addingbook.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditbookComponent } from "./editbook/editbook.component";
import { NewComponent } from "./new/new.component";
import { viewbook } from "./viewbook/viewbook.component";

export const routes:Routes=[
    {path:'', redirectTo:'/dashboard',pathMatch:'full'},
    {path:'dashboard' , component:DashboardComponent},
    {path:'new',component:NewComponent},
   
    {path:'book/:id',component:viewbook},
    {path:'editbook/:id',component:EditbookComponent},
    {path:'addbook',component:AddingbookComponent}
]