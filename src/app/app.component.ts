import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  
  title = 'Modist';
  headerTitle= window.localStorage.getItem("title")

  
  ngOnInit(): void {
    window.localStorage.setItem("cart","")
  }
}
