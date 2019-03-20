import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-posts-panel',
  templateUrl: './recent-posts-panel.component.html',
  styleUrls: ['./recent-posts-panel.component.css']
})
export class RecentPostsPanelComponent implements OnInit {
  posts

  constructor() { }

  ngOnInit() {
    this.posts = [
      {title: "10 Reasons Your Record Might Be Skipping", creationDate: Date.now()},
      {title: "Debut Albums That Changed The World", creationDate: Date.now()},
      {title: "Debut Albums That Were Awful", creationDate: Date.now()}
    ]
  }

}
