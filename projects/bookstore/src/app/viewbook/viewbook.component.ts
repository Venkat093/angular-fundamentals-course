import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/entity';
import { storeService } from '../services/storeservice';

@Component({
    selector: 'app-name',
    templateUrl: './viewbook.component.html',

})
export class viewbook implements OnInit {
    constructor(private services:storeService,private route:ActivatedRoute) {

     }
     book:any;

    ngOnInit()  { 
   //     let bookid:number=parseInt(this.route.snapshot.params['ID'])
    // this.book=this.services.grtbookbyid(bookid)

    this.book=this.services.grtbookbyid(+this.route.snapshot.params['id'])
    }
}
