import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  title = "Edit Product";
  product: any;
  paramId: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(){
    this._route.params.subscribe((params: Params)=>{
      this.paramId = params['id'];
      console.log(params['id']);
    })
    this.getProductFromService(this.paramId)
  }
  getProductFromService(id){
    let observable = this._httpService.getProduct(id);
    observable.subscribe(data=>{
      console.log("Data Product", data);
      this.product = data['product'];
      console.log(this.product);
      console.log("Errors", data['error']);
    })
  }
  updateProduct(){
    if(this.product.title.length > 3 && this.product.price){
      // this.product.price = this.product.price.toFixed(2);
      let observable = this._httpService.editProduct(this.paramId, this.product);
      observable.subscribe(data=>{
      console.log("Update Data", data);
      console.log("Errors", data['error']);
    })
    setTimeout(() => {
      this.redirectProducts()
    }, 500);
    }
  }
  deleteProduct(){
    let observable = this._httpService.deleteProduct(this.paramId);
    observable.subscribe(data=>{
      console.log("Delete Data", data);
      console.log("Errors", data['error']);
    })
    this.redirectProducts();
  }
  redirectProducts(){
    this._router.navigate(['/products']);
  }
}
