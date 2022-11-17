import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export class ForoComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    localStorage.setItem("title", "Preguntas");
  }
  redirect(path:string ) {
    this.router.navigate([path]);  
  } 
}
