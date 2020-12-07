import { Component, OnInit } from '@angular/core';
import { Announcement } from '../shared/appmodels.model';
import { DataService } from '../shared/dataservice.service';

@Component({
  selector: 'app-categories-main',
  templateUrl: './categories-main.component.html',
  styleUrls: ['./categories-main.component.css']
})
export class CategoriesMainComponent implements OnInit {

  constructor(private service: DataService) { }
  foreignLanguages: Announcement[]

  languages = "languages"
  maths = "maths"
  it = "it"
  art = "art"
  music = "music"
  science = "science"

  ngOnInit(): void {
  }

}
