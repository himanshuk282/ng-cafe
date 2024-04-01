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

  constructor() { }

  ngOnInit(): void {
    // Initialize Bootstrap carousel
    // var myCarousel = document.querySelector('#carouselExampleControls');
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //   interval: 5000, // Change slide every 5 seconds
    //   wrap: true // Loop back to first slide after last slide
    // });
  }
}
