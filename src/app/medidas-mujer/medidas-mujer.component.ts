import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedidasMujerService } from '../services/medidasMujer.service';
import { medidasMujer } from '../models/medidasMujer';
import { Global } from '../services/Global';


@Component({
  selector: 'app-medidas-mujer',
  templateUrl: './medidas-mujer.component.html',
  styleUrls: ['./medidas-mujer.component.scss'],
  providers: [MedidasMujerService]
})
export class MedidasMujerComponent implements OnInit {
  public url:string;
  public medidasMujer: medidasMujer[] = [];
  constructor(
    public router:Router,
    private _medidasMujeService: MedidasMujerService,
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
   
    this._medidasMujeService.getMedidasMujer().subscribe(
      response => {
        console.log(response);
            if(response.medidas){
              this.medidasMujer = response.medidas;
              console.log(this.medidasMujer)
            }else{
        }
        },
    error => {
      console.log(error)
    }
    )
}
}
