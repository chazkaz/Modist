import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ConfeccionarComponent } from './confeccionar/confeccionar.component';
import { ProductosComponent } from './productos/productos.component';
import { AgendarComponent } from './agendar/agendar.component';
import { HeaderComponent } from './header/header.component';
import { ForoComponent } from './foro/foro.component';
import { AgregarConsultaComponent } from './agregar-consulta/agregar-consulta.component';
import { ConfeccionarMujerComponent } from './confeccionar-mujer/confeccionar-mujer.component';
import { ConfeccionarHombreComponent } from './confeccionar-hombre/confeccionar-hombre.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductosNewComponent } from './productos-new/productos-new.component';
import { MedidasHombreComponent } from './medidas-hombre/medidas-hombre.component';
import { MedidasMujerComponent } from './medidas-mujer/medidas-mujer.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ConfeccionarComponent,
    ProductosComponent,
    AgendarComponent,
    HeaderComponent,
    ForoComponent,
    AgregarConsultaComponent,
    ConfeccionarMujerComponent,
    ConfeccionarHombreComponent,
    ShoppingCartComponent,
    ProductosNewComponent,
    MedidasHombreComponent,
    MedidasMujerComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
