import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/products.model';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {


  product=new Product();
  constructor(private service:ServicesService,private route:Router) { }

  ngOnInit(): void {
    
  }
  saveemployee()
  {
    this.service.addproducts(this.product).subscribe(data=>{ 
      
    },
    error=>console.log(error))
  }
  submit()
  {
    this.saveemployee();
    this.gotolist();
  }
  gotolist()
{
  this.route.navigate(['/product'])
}
  
}
