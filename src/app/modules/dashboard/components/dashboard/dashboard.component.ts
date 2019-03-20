import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  albums
  messages
  notifications
  constructor() { }

  ngOnInit() {
    this.albums = Array(6).fill({
      id: 1,
      artist: "sting",
      name: "ten summoner's tales",
      genre: "rock",
      year: 1993,
      styles: ["Soft Rock", "Pop Rock"],
      image: {url: ""}})

    

  }

}
