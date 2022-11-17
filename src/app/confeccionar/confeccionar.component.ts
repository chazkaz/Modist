import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confeccionar',
  templateUrl: './confeccionar.component.html',
  styleUrls: ['./confeccionar.component.scss']
})
export class ConfeccionarComponent implements OnInit {
  
  gifs: string[] = [
    "https://www.wikihow.com/video/9/91/Take%20Clothing%20Measurements%20Step%205%20Version%205.360p.mp4",
    "https://www.wikihow.com/video/8/83/Take%20Clothing%20Measurements%20Step%206%20Version%205.360p.mp4",
    "https://www.wikihow.com/video/b/bd/Take Clothing Measurements Step 7 Version 5.360p.mp4",
    "https://www.wikihow.com/video/9/9f/Take Clothing Measurements Step 8 Version 4.360p.mp4",
    "https://www.wikihow.com/video/7/7a/Take Clothing Measurements Step 9 Version 4.360p.mp4",
    "https://www.wikihow.com/video/a/a5/Take Clothing Measurements Step 10 Version 5.360p.mp4",
    "https://www.wikihow.com/video/d/d9/Take Clothing Measurements Step 11 Version 5.360p.mp4",
    "https://www.wikihow.com/video/3/34/Take Clothing Measurements Step 12 Version 4.360p.mp4"
  ]
  titles: string[] = [
    "Comienza con el cuello para las camisas",
    "Toma la medida del pecho en la parte más ancha",
    "Pídele a un amigo que te tome la medida de la manga",
    "Toma la medida de tu cintura natural",
    "Mide el ancho de las caderas y la distancia desde tu cintura",
    "Mide el tamaño del muslo, la rodilla y la pantorrilla",
    "Toma las medidas de la entrepierna",
    "Toma la medida del largo de pierna"

  ]
  contents: string[] = [
    "Mide la base del cuello donde generalmente se ubica el cuello de la camisa. Coloca el extremo de la cinta métrica en la parte frontal del cuello y envuélvela alrededor hasta que los extremos se unan. Ajusta suavemente la cinta y toma la medida",
    "Coloca la cinta en el centro del pecho en la parte más ancha, que está justo arriba de los pezones. Envuelve la cinta por la espalda, por debajo de las axilas, y asegúrate de que la cinta esté horizontal y no se doble",
    "Esta medida es difícil tomarla uno mismo, ya que necesitas medir desde el centro de la espalda hacia todo el brazo. Coloca la mano en la cadera con el codo en un ángulo recto. Pídele a un amigo que extienda la cinta desde el hombro, siga por el brazo, hasta la muñeca.[6]"
    +"Asegúrate de que la cinta vaya por la parte superior del hombro y por el codo para obtener la medida completa"
    +"Si necesitas tomar esta medida tú mismo, prueba pegar el extremo de la cinta en el centro de la espalda y luego guíala cuidadosamente por el brazo."
    +"Si no hay más remedio, puedes medir desde el centro del pecho en cambio, pero la medida puede ser menos precisa.",
    "La cintura natural es la zona donde la cintura es más pequeña, generalmente sobre el ombligo y justo debajo de las costillas. Toma esta medida incluso si usas los pantalones en un lugar diferente. Sostén el extremo de la cinta en el frente y envuelve el resto alrededor de la espalda para tomar la medida.",
    "Párate con las piernas abiertas a aproximadamente 15 cm (6 pulgadas) de distancia. Envuelve la cinta alrededor de la zona en la que las caderas son más anchas",
    "Aunque estas medidas no siempre se usan, son importantes si te van a hacer ropa a medida. Envuelve la cinta alrededor de cada zona en su parte más ancha, y luego toma la medida.",
    "Mide la longitud de la entrepierna colocando el extremo de la cinta métrica en el frente de la cintura, y luego lleva la cinta hacia las piernas. Coloca el dedo sobre la cinta en la cintura natural en la espalda, y esa es la longitud de la entrepierna",
    "Ponte un par de zapatos. Esta medida también es más fácil tomarla con la ayuda de un amigo, ya que debes medir desde la entrepierna hasta donde llegan los pantalones. Sin embargo, si debes hacerlo tú mismo, prueba pisar un extremo de la cinta y traerla hasta la entrepierna"
  ]

  gif = this.gifs[0];
  title = this.titles[0];
  content = this.contents[0];
  gender = false;

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("title", "Confeccionar");
  }
  changeGender(){
    //this.gender = !this.gender; 
    console.log(this.gender)
  } 
  
  
}
