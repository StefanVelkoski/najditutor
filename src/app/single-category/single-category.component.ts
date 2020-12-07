import { Component, OnInit, Input } from '@angular/core';
import { Announcement } from '../shared/appmodels.model';
import { DataService } from '../shared/dataservice.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  announcements: Announcement[];

  selectedLevel = "All";
  selectedFilter = "None";
  searchTerm = "";
  categoryTitle;

  constructor(private service: DataService, private route: ActivatedRoute) { }

  pageTitle

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      this.categoryTitle = params['type'];

      switch (this.categoryTitle) {
        case "maths":
          this.categoryTitle = "Математика";
          break;
        case "languages":
          this.categoryTitle = "Јазици";
          break;
        case "art":
          this.categoryTitle = "Ликовна уметност";
            break;
        case "music":
          this.categoryTitle = "Музичка уметност";
            break;
        case "science":
          this.categoryTitle = "Наука";
            break;
        case "it":
          this.categoryTitle = "Информатички технологии";
            break;
        default:
          this.categoryTitle = "";
            break;
    }
    })

    this.route.params.forEach((params: Params) => {
      this.service.getAnnouncements().subscribe( data => {
        console.log(data);

        this.announcements = data.filter( array => {
          return array.field.toLocaleLowerCase() == params['type'];
        });
        console.log(this.announcements)


      })
    })

  }

  selectedLvl(){
    // console.log(this.selectedLevel)
    // console.log(this.selectedFilter)
    // console.log(this.announcements)
  }


}
