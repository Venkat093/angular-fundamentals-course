import { Injectable } from "@angular/core";
import { IUser } from "./user-model";

@Injectable()
export class AuthService {
    currentUser:IUser
    loginUser(username:string,password:string)
    {
      this.currentUser ={
        id: 1,
        username:"venkat",
        firstname: "venkata",
        lastname:"sai"
        
      }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    updatecurentuser(firstname:string,lastname:string)
    {
this.currentUser.firstname=firstname
this.currentUser.lastname=lastname
    }
}