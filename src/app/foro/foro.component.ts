import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { foroService } from '../services/foro.service';
import { foro } from '../models/foro';
import { Global } from '../services/Global';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss'],
  providers: [foroService]
})
export class ForoComponent implements OnInit {
  public preguntas: foro[] = [];
  public url:string;
  constructor(
      public router:Router,
      private _foroService: foroService
    ) {
      this.url = Global.url;
     }

  ngOnInit(): void {
    this._foroService.getPreguntas().subscribe(
      response => {
        console.log(response);
        if(response.preguntas){
          this.preguntas = response.preguntas;
          console.log(this.preguntas);

        }
        else{

        }
      },
      error => {
        console.log(error);
      }
      
    )
  }
  redirect(path:string ) {
    this.router.navigate([path]);  
  } 
}
