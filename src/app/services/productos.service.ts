import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs"
import { Producto } from "../models/producto";
import { Global } from "./Global";

@Injectable()
export class ProductoService{
    //public productos: Producto[];
    public url:string;
    constructor(
        private _http:HttpClient
        
    ){
        this.url=Global.url;
        
    }

    getProdutos():Observable<any>{
        return this._http.get(this.url+'productos');
    }
    create(producto:Producto):Observable<any>{
        let params = JSON.stringify(producto);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'save', params, {headers: headers});
    }

}