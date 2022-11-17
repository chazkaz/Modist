import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component'; 
import { ConfeccionarComponent } from './confeccionar/confeccionar.component';
import { AgendarComponent } from './agendar/agendar.component';
import { ForoComponent } from './foro/foro.component';
import { AgregarConsultaComponent } from './agregar-consulta/agregar-consulta.component';
import { ConfeccionarHombreComponent} from './confeccionar-hombre/confeccionar-hombre.component'
import { ConfeccionarMujerComponent } from './confeccionar-mujer/confeccionar-mujer.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductosNewComponent } from './productos-new/productos-new.component';
import { MedidasHombreComponent } from './medidas-hombre/medidas-hombre.component';
import { MedidasMujerComponent } from './medidas-mujer/medidas-mujer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'confeccionar', component: ConfeccionarComponent},
  {path: 'agendar', component: AgendarComponent},
  {path: 'foro', component:ForoComponent},
  {path: 'crearPregunta', component: AgregarConsultaComponent},
  {path: 'confeccionHombre', component: ConfeccionarHombreComponent},
  {path: "confeccionMujer", component:ConfeccionarMujerComponent},
  {path: "shopping", component:ShoppingCartComponent},
  {path: 'productos/crear',component: ProductosNewComponent},
  {path: 'medidasHombre',component:MedidasHombreComponent},
  {path: 'medidasMujer',component:MedidasMujerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
