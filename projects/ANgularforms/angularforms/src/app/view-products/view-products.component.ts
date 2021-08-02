import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/products.model';
import { ServicesService } from '../services.service';

@Component({
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products!: Product[];
  constructor( private service:ServicesService,private router:Router) { }

  ngOnInit(): void {
    this.service.getproducts().subscribe(data=>{this.products=data});

  }
addproduct()
{
  this.router.navigate(['/addproduct'])
}
}
