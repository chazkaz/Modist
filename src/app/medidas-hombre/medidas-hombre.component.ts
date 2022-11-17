import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedidasHombreService } from '../services/medidashombre.service'
import { medidasHombre } from '../models/medidasHombre'
import { Global } from '../services/Global';
@Component({
  selector: 'app-medidas-hombre',
  templateUrl: './medidas-hombre.component.html',
  styleUrls: ['./medidas-hombre.component.scss'],
  providers:[MedidasHombreService]
})
export class MedidasHombreComponent implements OnInit {
  public url:string;
  public medidasHombre: medidasHombre[] =[];
  constructor(
    public router:Router,
    private _medidasHombreService: MedidasHombreService,
    ) { 
      this.url = Global.url;
    }

  ngOnInit(): void {
    this._medidasHombreService.getMedidasHombre().subscribe(
      Response => {
        if(Response.medidas){
          this.medidasHombre = Response.medidas;
          this.medidasHombre.forEach((medidas,index)=> {
            this.medidasHombre[index].image=medidas.image.split('"').join('');
            console.log(medidas.image);
          });
          console.log(this.medidasHombre)
        }else{
        }
      },
      error => {
        console.log(error)
      }
      
    )
  }
  

  
}
