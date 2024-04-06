import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  instagramUrl:string = "https://www.instagram.com/__trendcafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  facebookUrl:string = "https://www.facebook.com/trendcafebarabanki";
  mapUrl:string = "https://maps.app.goo.gl/iLWLwwWfFvMBFtsJ8";
  onInstagramRedirect(){
    window.open(this.instagramUrl, '_blank');
  }
  onFacebookRedirect(){
    window.open(this.facebookUrl, '_blank');
  }
  onWhatsappRedirect(){
    var phoneNumber = "0123456789";
    var message = "Hello";
    var whatsappUrl:string = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
  onMapRedirect(){
    window.open(this.mapUrl, '_blank');
  }
}
