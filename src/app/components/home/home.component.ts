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
  beverageCount:number = 0;
  //same process
  breakfastCount:number = 0;
  mealCount:number = 0;
  // customerfeedback:number = 0;
  
  constructor() { }

  ngOnInit(): void {  }
  onZomatoRedirect(){
    window.open(this.zomatoUrl, '_blank');
  }
  onSwiggyRedirect(){
    window.open(this.swiggyUrl, '_blank');
  }
  onWhatsappRedirect(){
    window.open(this.swiggyUrl, '_blank');
  }

  beverageCountstop:any = setInterval(()=>{
    this.beverageCount++;
    if(this.beverageCount == 30)
    {

      clearInterval(this.beverageCountstop);
    }

  },10)


  breakfastCountStop:any = setInterval(()=>{
    this.breakfastCount++;
    if(this.breakfastCount == 15)
    {      
      clearInterval(this.breakfastCountStop);
    }
  },10) 

  mealCountStop:any = setInterval(()=>{
    this.mealCount++;
    if(this.mealCount == 21)
    {
      clearInterval(this.mealCountStop);
    }
  },10)
}
