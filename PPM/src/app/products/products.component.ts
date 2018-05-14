import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = "Products List";
  constructor(
    private _httpService: HttpService
  ) { }
  products: any[];
  ngOnInit() {
    this.getProductsFromService();
  }
  getProductsFromService(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data =>{
      console.log("Products Data", data);
      this.products = data['products'];
      console.log("Errors", data['error']);
    })
  }
  deleteProduct(id){
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data=>{
      console.log("Delete Data", data);
      console.log("Errors", data['error']);
    })
    this.getProductsFromService();
  }
}
