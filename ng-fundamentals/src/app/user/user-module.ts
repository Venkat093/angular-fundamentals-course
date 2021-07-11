import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthService } from "./auth-service";
import { logincomponent } from "./login-component";
import { profile } from "./profilecomponent2";
import { userRoutes } from "./userRoutes";



@NgModule({
    imports:[
   CommonModule,
   FormsModule,
   ReactiveFormsModule,
   RouterModule.forChild(userRoutes)
    ],
    declarations:[
logincomponent,
profile
    ],
    providers:[
        
    ]


})
export class userMOdule{}