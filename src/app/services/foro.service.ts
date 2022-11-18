import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs"
import { Global } from "./Global";
import { foro} from "../models/foro"

@Injectable()
export class foroService{
    public url:string;
    constructor(
        private _http:HttpClient
        
    ){
        this.url=Global.url;
        
    }
    getPreguntas():Observable<any>{
        return this._http.get(this.url+'mostrarPreguntas');
    }
    create(foro:foro):Observable<any>{
        let params = JSON.stringify(foro);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'subirPregunta', params, {headers: headers});
    }
}