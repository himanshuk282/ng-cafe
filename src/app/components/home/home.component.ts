import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  zomatoUrl:string = "http://zoma.to/r/19891237";
  swiggyUrl:string = "https://www.swiggy.com/restaurants/trend-cafe-harjeet-bhawan-court-road-nawabganj-bharabanki-500620";
  constructor() { }

  ngOnInit(): void {
    // Initialize Bootstrap carousel
    // var myCarousel = document.querySelector('#carouselExampleControls');
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //   interval: 5000, // Change slide every 5 seconds
    //   wrap: true // Loop back to first slide after last slide
    // });
  }
  onZomatoRedirect(){
    window.open(this.zomatoUrl, '_blank');
  }
  onSwiggyRedirect(){
    window.open(this.swiggyUrl, '_blank');
  }
}
