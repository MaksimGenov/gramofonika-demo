import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/Link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  firstGroupLinks: Link[]
  secondGroupLinks: Link[]

  constructor() { }

  ngOnInit() {
    this.firstGroupLinks = [
      {name: "about gramofonika", url: ""},
      {name: "blog", url: ""},
      {name: "contacts", url: ""}
    ]
    this.secondGroupLinks = [
      {name: "guidelines", url: ""},
      {name: "term & policies", url: ""}
    ]
  }

}
