import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confeccionar',
  templateUrl: './confeccionar.component.html',
  styleUrls: ['./confeccionar.component.scss']
})
export class ConfeccionarComponent implements OnInit {
  
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
