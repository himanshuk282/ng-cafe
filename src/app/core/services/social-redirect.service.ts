import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialRedirectService {
  instagramUrl:string = "https://www.instagram.com/__trendcafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  facebookUrl:string = "https://www.facebook.com/trendcafebarabanki";
  mapUrl:string = "https://maps.app.goo.gl/iLWLwwWfFvMBFtsJ8";
  zomatoUrl:string = "http://zoma.to/r/19891237";
  swiggyUrl:string = "https://www.swiggy.com/restaurants/trend-cafe-harjeet-bhawan-court-road-nawabganj-bharabanki-500620";
  constructor() { }
  //Create helper methods to trigger custom actions inside service instead of doing it inside a ts to remove
  // redundancy
  redirectToInstagram(){
    window.open(this.instagramUrl, '_blank');
  }
  redirectToFacebook(){
    window.open(this.facebookUrl, '_blank');
  }
  redirectToWhatsapp(){
    var phoneNumber = "0123456789";
    var message = "Hello";
    var whatsappUrl:string = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
  redirectToMaps(){
    window.open(this.mapUrl, '_blank');
  }
  redirectToZomato(){
    window.open(this.zomatoUrl, '_blank');
  }
  redirectToSwiggy(){
    window.open(this.swiggyUrl, '_blank');
  }
}
