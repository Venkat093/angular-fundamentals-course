import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/entity';
import { storeService } from '../services/storeservice';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {


  constructor( private services:storeService,private router:Router) { }

  ngOnInit() {
   this.allbooks=this.services.getbooks();
   this.mostpopularbook=this.services.mostpopularbook;
  }
  allbooks: Book[] = []; 
  mostpopularbook!: Book;

editbook(id:number)
{
  this.router.navigate(['editbook',id])
}

  

 

}