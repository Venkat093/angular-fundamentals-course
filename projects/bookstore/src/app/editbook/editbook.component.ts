
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { storeService } from '../services/storeservice';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  book:any;
  
  constructor(private services:storeService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    
    this.book=this.services.grtbookbyid(+this.route.snapshot.params['id'])
  }
  onSubmit(formValues: any)
  {
    this.services.updateEvent(formValues)
    console.log(formValues)
    this.router.navigate(['/dashboard'])
  }
  setmostpopular()
{
  this.services.setMostpopularbook(this.book)
}
}
