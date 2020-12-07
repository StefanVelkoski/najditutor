import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counto1 = 0;
  counto2 = 0;
  counto3 = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

}
