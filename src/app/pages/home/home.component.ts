import { Component, OnInit, inject } from '@angular/core';
import { SocialRedirectService } from '../../core/services/social-redirect.service';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private socialService = inject(SocialRedirectService);

  beverageCount:number = 0;
  //same process
  breakfastCount:number = 0;
  mealCount:number = 0;
  // customerfeedback:number = 0;
  
  constructor() { }

  ngOnInit(): void {  }
  onZomatoRedirect(){
    this.socialService.redirectToZomato();
  }
  onSwiggyRedirect(){
    this.socialService.redirectToSwiggy();
  }
  onWhatsappRedirect(){
    this.socialService.redirectToWhatsapp();
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
