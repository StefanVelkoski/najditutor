import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-mid-section-homepage',
  templateUrl: './mid-section-homepage.component.html',
  styleUrls: ['./mid-section-homepage.component.css']
})
export class MidSectionHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chasovi = [ "Математика?", "Јазици?", "Музика?", "Уметност?" ];
    var i = 0;
    var quoteTimer = function() {
      // if at end of array, reset
      if (i >= chasovi.length) {
        i = 0;
      }
      $('#skripta').fadeOut(1000, function(){
        $(this).text(chasovi[i]);
      });
      $('h1').fadeIn();
      i++;
    }
    $(document).ready(function() {
      $('#skripta').text(chasovi[i++]); // initialize with first quote
      setInterval(quoteTimer, 4000);
    });
  }

}
