import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrls: ['./messages-panel.component.css']
})
export class MessagesPanelComponent implements OnInit {
  messages

  constructor() { }

  ngOnInit() {
    this.messages = [
      {title: "Sting - Ten Summoner's Tales", sender: "DjSomeone", image: {url: ""}},
      {title: "hi, bla bla", sender: "DjAnotherOne", image: {url: ""}},
      {title: "Hi, do you have more copies of the Queen record", sender: "DjWho", image: {url: ""}}
    ]
  }

}
