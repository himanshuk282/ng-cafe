import { Component, inject } from '@angular/core';
import { SocialRedirectService } from '../../core/services/social-redirect.service';

@Component({
  selector: 'app-order-now',
  standalone: true,
  imports: [],
  templateUrl: './order-now.component.html',
  styleUrl: './order-now.component.css'
})
export class OrderNowComponent {
  private socialService = inject(SocialRedirectService);

  openWhatsapp(){
    this.socialService.redirectToWhatsapp();
  }
}
