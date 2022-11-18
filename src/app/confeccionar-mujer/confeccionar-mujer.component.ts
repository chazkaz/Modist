import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MedidasMujerService } from '../services/medidasMujer.service';
import { Global } from '../services/Global';
import { medidasMujer } from '../models/medidasMujer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confeccionar-mujer',
  templateUrl: './confeccionar-mujer.component.html',
  styleUrls: ['./confeccionar-mujer.component.scss'],
  providers: [MedidasMujerService]
})
export class ConfeccionarMujerComponent implements OnInit {
  public medidaMujer: medidasMujer;

  gifs: string[] = [
    "https://www.wikihow.com/video/c/c4/Take Clothing Measurements Step 13 Version 2.360p.mp4",
    "https://www.wikihow.com/video/e/ea/Take Clothing Measurements Step 14 Version 2.360p.mp4",
    "https://www.wikihow.com/video/4/44/Take Clothing Measurements Step 15 Version 2.360p.mp4",
    "https://www.wikihow.com/video/6/63/Take Clothing Measurements Step 16 Version 2.360p.mp4",
    "https://www.wikihow.com/images/thumb/c/ca/Take-Clothing-Measurements-Step-17-Version-2.jpg/v4-728px-Take-Clothing-Measurements-Step-17-Version-2.jpg.webp",
    "https://www.wikihow.com/video/4/4b/Take Clothing Measurements Step 18 Version 2.360p.mp4",
    "https://www.wikihow.com/video/b/bb/Take Clothing Measurements Step 19 Version 2.360p.mp4",
    "https://www.wikihow.com/video/9/95/Take Clothing Measurements Step 20 Version 2.360p.mp4"
  ] 
  titles: string[] = [
    "Comienza con la medida del busto",
    "Mide debajo del busto si necesitas las dimensiones para un sostén",
    "Toma la medida de la manga",
    "Anota la medida del hombro para la ropa a medida",
    "Encuentra tu cintura natural",
    "Determina la medida de la cadera en su punto más ancho",
    "Mide el ancho del muslo, de la rodilla y de la pantorrilla para la ropa a medida",
    "Toma la medida del largo de pierna"

  ]
  contents: string[] = [
    "Coloca el extremo de la cinta métrica en la parte frontal del pecho en su punto más ancho. Por debajo de los brazos, envuelve la cinta alrededor de la espalda, y asegúrate de que no se doble. Tírala para que quede tensa y horizontal alrededor del cuerpo. Trata de bajar los brazos y posicionarlos encima de la cinta para tomar la medida",
    "Si necesitas las medidas para un sostén, también toma la medida justo por debajo del busto, manteniendo la cinta horizontal y un poco ceñida. Redondea la medida a la unidad más cercana",
    "La ropa de mujer por lo general no usa medidas de mangas, pero puede ser útil tener la información si vas a comprar en línea. Coloca el extremo de la cinta en la punta del hombro y mide en dirección hacia la muñeca",
    "Coloca un extremo de la cinta métrica en la punta de un hombro y extiéndela por la espalda. Toma la medida en la punta del otro hombro, asegurándote primero de que la cinta esté plana sobre tu espalda",
    "Tu cintura natural es la parte más pequeña de la cintura, generalmente por arriba del ombligo y debajo de las costillas. Asegúrate de que la cinta métrica esté plana sobre tu cuerpo, y luego toma la medida por la parte frontal",
    " Envuelve la cinta alrededor del cuerpo, y asegúrate de también pasarla por la parte más ancha de las nalgas. Mantén la cinta horizontal y plana sobre tu cuerpo, y luego toma la medida por el frente, donde se unen los extremos de la cinta",
    "A pesar de que no encontrarás estas medidas muy a menudo cuando compres ropa ya hecha, son importantes para la ropa a medida. Envuelve la cinta en cada parte de la pierna en su punto más ancho y anota las medidas",
    " Esta medida se extiende desde la entrepierna hasta donde quieras que llegue el pantalón en el tobillo. Puede ser difícil tomarla tú misma, así que pídele a un amigo que te ayude"
  ]
  
  gif = this.gifs[0];
  title = this.titles[0];
  content = this.contents[0];

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: 50,
    uploadAPI:  {
      url: Global.url+'upload-imageMujer',
      
      withCredentials: false,
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      attachPinBtn: 'Sube tu imagen de Producto...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
    
};
 
  constructor(
    public router:Router,
    private _medidasMujerService: MedidasMujerService
  ) { 
    this.medidaMujer= new medidasMujer('','','','','','','','','');
  }

  ngOnInit(): void {
  }
  imageUpload(data: any){
     
    this.medidaMujer.image = data.body.image;
    console.log(this.medidaMujer.image);

  }
  setContent(index: number) {
    this.gif = this.gifs[index];
    this.title = this.titles[index];
    this.content = this.contents[index];
  }
  onSubmit() {
    this._medidasMujerService.create(this.medidaMujer).subscribe(
      response => {
        Swal.fire(
          'Medidas enviadas Correctamente',
          'las medidas fueron enviadas correctamente'
        );
        this.medidaMujer = response.medida;
        
      },
      error => {
        console.log(error)
      }
    )
  }
  redirect(path:string ) {
    this.router.navigate([path]);  
  } 
}
