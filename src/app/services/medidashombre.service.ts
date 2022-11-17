import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs"
import { medidasHombre } from "../models/medidasHombre";
import { Global } from "./Global";

@Injectable()
export class MedidasHombreService{
    //public productos: Producto[];
    public url:string;
    constructor(
        private _http:HttpClient
        
    ){
        this.url=Global.url;
        
    }
    getMedidasHombre():Observable<any>{
        return this._http.get(this.url+'medidasHombre');
    }
    create(medidas:medidasHombre):Observable<any>{
        let params = JSON.stringify(medidas);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'subirMedidasHombre', params, {headers: headers});
    }
}