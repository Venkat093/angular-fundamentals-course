import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { storeService } from '../services/storeservice';

@Component({
  selector: 'app-addingbook',
  templateUrl: './addingbook.component.html',
  styleUrls: ['./addingbook.component.css']
})
export class AddingbookComponent implements OnInit {

  book:any;
  constructor(private services:storeService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(formValues: any)
  {
    this.services.addbook(formValues);

   console.log(formValues);
   this.router.navigate(['/dashboard'])
    
  }

}
