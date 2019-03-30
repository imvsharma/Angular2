import { Component } from '@angular/core';
import { MessageService } from '../_service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _messageService: MessageService) { }

  sendMessage(): void {
    this._messageService.sendMessage('Message From Home Component to App Component');
  }

  clearMessage(): void {
    this._messageService.clearMessage();
  }
 
}
