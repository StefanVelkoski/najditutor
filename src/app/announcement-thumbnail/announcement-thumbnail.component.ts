import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Announcement } from '../shared/appmodels.model';

@Component({
  selector: 'app-announcement-thumbnail',
  templateUrl: './announcement-thumbnail.component.html',
  styleUrls: ['./announcement-thumbnail.component.css']
})
export class AnnouncementThumbnailComponent implements OnChanges {

  @Input() announcements: Announcement[]
  visibleAnnouncements: Announcement[]
  @Input() filterLevel;
  @Input() sortType;
  @Input() searchTerm;

  constructor() {
  }

  ngOnChanges(): void {
    console.log(this.filterLevel)
    console.log(this.searchTerm)
    console.log(this.sortType);

    if(this.announcements){
      this.filterAnnouncementsByLevel(this.filterLevel);
      this.sortAnnouncements(this.sortType);
      this.searchAnnouncements(this.searchTerm);
    }
  }

  filterAnnouncementsByLevel(filter){
    if(filter === "All"){
      this.visibleAnnouncements = this.announcements.slice(0);
    } else if(filter === "Beginner") {
      this.visibleAnnouncements = this.announcements.filter(ann => {
        return ann.difficulty == "Beginner";
      })
    } else if(filter === "Intermediate"){
      this.visibleAnnouncements = this.announcements.filter(ann => {
        return ann.difficulty == "Intermediate";
      })
    }
    else if(filter === "Advanced"){
      this.visibleAnnouncements = this.announcements.filter(ann => {
        return ann.difficulty == "Advanced";
      })
    }
  }

  sortAnnouncements(criteria){
    if (criteria === "None"){
      this.visibleAnnouncements = this.visibleAnnouncements.slice(0);
    } else if (criteria === "PriceAsc"){

      this.visibleAnnouncements.sort(sortByPriceAsc)

    } else if (criteria === "PriceDesc"){

      this.visibleAnnouncements.sort(sortByPriceDesc)

    } else if (criteria === "AlphabeticalAsc"){

      this.visibleAnnouncements.sort(sortByNameAsc)

    } else if (criteria === "AlphabeticalDesc"){

      this.visibleAnnouncements.sort(sortByNameDesc)

    } else if (criteria === "DateAsc"){

      this.visibleAnnouncements.sort(sortByDateNewest)

    } else if (criteria === "DateDesc"){

      this.visibleAnnouncements.sort(sortByDateOldest)

    }

  }

  searchAnnouncements(searchTerm){
      this.visibleAnnouncements = this.visibleAnnouncements.filter(announcement => {
        if(announcement.title.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1){
          return true;
        } else if (announcement.description.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1) {
          return true;
        } else {
          return false;
        }

      });

    // this.service.searchSessions(searchTerm).subscribe(sessions => { this.foundSessions = sessions; console.log(this.foundSessions) });
  }

}

function sortByNameAsc(s1: Announcement, s2: Announcement ){
  if (s1.title > s2.title) return 1
  else if (s1.title === s2.title) return 0
  else return -1
}

function sortByNameDesc(s1: Announcement, s2: Announcement ){
  if (s1.title > s2.title) return -1
  else if (s1.title === s2.title) return 0
  else return 1
}

function sortByPriceAsc(s1: Announcement, s2: Announcement ){
  if (s1.price > s2.price) return 1
  else if (s1.price === s2.price) return 0
  else return -1
}

  function sortByPriceDesc(s1: Announcement, s2: Announcement ){
    if (s1.price > s2.price) return -1
    else if (s1.price === s2.price) return 0
    else return 1
}

function sortByDateNewest(s1: Announcement, s2: Announcement){
  return <any>new Date(s2.date) - <any>new Date(s1.date);
}

function sortByDateOldest(s1: Announcement, s2: Announcement){
  return <any>new Date(s1.date) - <any>new Date(s2.date);
}
