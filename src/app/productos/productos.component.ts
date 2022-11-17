import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';
import { Router } from '@angular/router';
import { ProductoService } from  '../services/productos.service'
import {Producto} from '../models/producto'
import { Global } from '../services/Global';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductoService]
})

export class ProductosComponent implements OnInit {
  productsAdd: Producto[] = [];
  public products: Producto[] = [];
  public url:string;
  constructor(
    public router:Router, 
    private _productoService: ProductoService
    ) { 
     this.url = Global.url;
    }

  ngOnInit(): void {
    this._productoService.getProdutos().subscribe(
      response =>{
        if(response.productos){
          this.products = response.productos;
          this.products.forEach((producto,index)=> {
            this.products[index].image=producto.image.split('"').join('');
            console.log(producto.image);
          });
          console.log(this.products)
        }else{

        }
      },
      error => {
        console.log(error);
      }
    )
  }

  addToCart (product: Producto){
    let currentProduct = window.localStorage.getItem('cart') ? window.localStorage.getItem('cart') : null;
    let productInCart:Producto[] = currentProduct !== null ?  
    JSON.parse(currentProduct) : [];

    productInCart.push(product);
    window.localStorage.setItem('cart',JSON.stringify(productInCart));
    swal.fire({
      title: product.title + ' se agregó al carro Exitosamente',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Ir al carro de compra',
      cancelButtonText:
        'Seguir comprando',
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate(['shopping']); 
      }
    })
  }
  redirect(path:string ) {
    this.router.navigate([path]);  
  } 

  
}
