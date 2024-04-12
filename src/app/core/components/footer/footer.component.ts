import { Component, inject } from '@angular/core';
import { SocialRedirectService } from '../../services/social-redirect.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private socialService = inject(SocialRedirectService);
  
  onInstagramRedirect(){
    this.socialService.redirectToInstagram();
  }
  onFacebookRedirect(){
    this.socialService.redirectToFacebook();
  }
  onWhatsappRedirect(){
    this.socialService.redirectToWhatsapp();
  }
  onMapRedirect(){
    this.socialService.redirectToMaps();
  }
}
