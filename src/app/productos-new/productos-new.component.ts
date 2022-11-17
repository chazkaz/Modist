import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/productos.service'
import { Global } from '../services/Global';


@Component({
  selector: 'app-productos-new',
  templateUrl: './productos-new.component.html',
  styleUrls: ['./productos-new.component.scss'],
  providers: [ProductoService]
})
export class ProductosNewComponent implements OnInit {
  public producto: Producto;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: 50,
    uploadAPI:  {
      url: Global.url+'upload-image',
      
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
    private _productoService: ProductoService
  ) {
    this.producto = new Producto('', '', '', '', '');
  }

  ngOnInit(): void {
  }
  imageUpload(data: any){
     
    this.producto.image = JSON.stringify(data.body.image);
    console.log(this.producto.image);
    //console.log(this.producto) ; 

  }
  
  onSubmit() {
    this._productoService.create(this.producto).subscribe(
      response => {
        
        this.producto = response.producto;
        console.log(response);
      },
      error => {
        console.log(error)
      }
    )
  }
}
