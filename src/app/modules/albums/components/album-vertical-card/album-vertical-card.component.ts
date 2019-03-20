import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-vertical-card',
  templateUrl: './album-vertical-card.component.html',
  styleUrls: ['./album-vertical-card.component.css']
})
export class AlbumVerticalCardComponent {
  @Input() album
  isTracklistVisiable: boolean

  constructor() { }

  toogleTracklist() {
    this.isTracklistVisiable = !this.isTracklistVisiable
  }
}
