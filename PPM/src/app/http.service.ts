import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  getProducts(){
    return this._http.get('/findproduct');
  }
  getProduct(id){
    console.log(id);
    return this._http.get('/findproduct/' + id)
  }
  addProduct(newproduct){
    return this._http.post('/product', newproduct)
  }
  editProduct(id, product){
    console.log(id);
    console.log(product);
    return this._http.put('/product/edit/'+ id, product);
  }
  deleteProduct(id){
    console.log(id);
    return this._http.delete('/product/delete/'+id)
  }
}
