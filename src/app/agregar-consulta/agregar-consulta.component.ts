import { Component, OnInit } from '@angular/core';
import { foro } from '../models/foro';
import { foroService } from '../services/foro.service';
import Swal from 'sweetalert2';
import { Global } from '../services/Global';

@Component({
  selector: 'app-agregar-consulta',
  templateUrl: './agregar-consulta.component.html',
  styleUrls: ['./agregar-consulta.component.scss'],
  providers: [foroService]
})
export class AgregarConsultaComponent implements OnInit {
  public pregunta:foro;
    constructor(
      private _foroService: foroService
    ) {
      this.pregunta = new foro('','','')
     }

  ngOnInit(): void {
  }
  onSubmit() {
    this._foroService.create(this.pregunta).subscribe(
      response => {
        this.pregunta = response.pregunta;
        Swal.fire(
          'Pregunta Creado',
          'la pregunta fue Creado correctamente'
        );
        console.log(response);
      },
      error => {
        console.log(error)
      }
      
    )
    
  }
}
