import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs"
import { medidasMujer } from "../models/medidasMujer";
import { Global } from "./Global";
@Injectable()
export class MedidasMujerService{
    //public productos: Producto[];
    public url:string;
    constructor(
        private _http:HttpClient
        
    ){
        this.url=Global.url;
        
    }
    getMedidasMujer():Observable<any>{
        return this._http.get(this.url+'medidasMujer');
    }
    create(medidas:medidasMujer):Observable<any>{
        let params = JSON.stringify(medidas);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'subirMedidasMujer', params, {headers: headers});
    }
}