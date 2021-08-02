import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/products.model';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id!: number;
  product!: Product;
  constructor(private service:ServicesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){
   this.service.getproductbyid(+this.route.snapshot.params['id']).subscribe((data:Product)=>{
     this.product=data

    })
  
  }

}
