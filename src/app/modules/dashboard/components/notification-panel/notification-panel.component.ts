import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css']
})
export class NotificationPanelComponent implements OnInit {
  notifications

  constructor() { }

  ngOnInit() {
    this.notifications = [
      {title: '3 new records for sale from Sting "Ten Summoner\'s Tales"', creationDate: Date.now()},
      {title: '1 new record for sale from Janet Jackson "Control"', creationDate: Date.now()},
      {title: '3 new records for sale from Ella Fitzgerald "Sings Cole Porter Song...', creationDate: Date.now()}
    ]
  }

}
