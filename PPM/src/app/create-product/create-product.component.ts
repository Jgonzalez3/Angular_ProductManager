import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  title = "Create a New Product";
  newproduct = {title: "", price: null, image: ""};
  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  createProduct(){
    if(this.newproduct.title.length > 3 && this.newproduct.price){
      this.newproduct.price = this.newproduct.price.toFixed(2);
      let observable = this._httpService.addProduct(this.newproduct);
      observable.subscribe(data=>{
      console.log("Create Data", data);
      console.log("Errors", data['error']);
    })
    setTimeout(() => {
      this.redirectProducts()
    }, 500);
    }
  }
  redirectProducts(){
    this._router.navigate(['/products']);
  }
}
