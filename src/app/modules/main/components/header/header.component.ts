import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/Link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dropdownLinks: Link[]

  constructor() { }

  ngOnInit() {
    this.dropdownLinks = [
      {name: "dashboard", url: "/dashboard"},
      {name: "log in", url: "/login"}
    ]
  }

}
