import { Routes } from "@angular/router";
import { AddproductComponent } from "../addproduct/addproduct.component";
import { ProductComponent } from "../product/product.component";
import { ViewProductsComponent } from "../view-products/view-products.component";


export const routes:Routes=[
    
    {path:'product',component:ViewProductsComponent},
    
    {path:'', redirectTo:'/product',pathMatch:'full'},
    {path:'addproduct',component:AddproductComponent},
    {path:'productbyid/:id',component:ProductComponent}
]