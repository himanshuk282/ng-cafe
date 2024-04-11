import { Component } from '@angular/core';

@Component({
  selector: 'app-order-now',
  standalone: true,
  imports: [],
  templateUrl: './order-now.component.html',
  styleUrl: './order-now.component.css'
})
export class OrderNowComponent {
  openWhatsapp(){
    var phoneNumber = '0123456789';
    var message = 'Message to contact whatsapp business';

    // URL to open WhatsApp with phone number and message
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab or window
    window.open(whatsappUrl, '_blank');
  }
}
