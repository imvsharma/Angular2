import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './_service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private _messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this._messageService.getMessage().subscribe(message => {
      this.message = message;
    })
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
