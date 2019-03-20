import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {
  tracks

  constructor() { }

  ngOnInit() {
    this.tracks = [ 
      {position: "a1", name: "if i ever lose my faith in you", lenght: "4:26"},
      {position: "a2", name: "fields of gold", lenght: "3:26"},
      {position: "a3", name: "heavy cloud no rain", lenght: "5:06"},
      {position: "a4", name: "she's too good for me", lenght: "4:26"},
      {position: "b1", name: "shape of my heart", lenght: "3:36"},
      {position: "b2", name: "something the boy said", lenght: "4:56"},
      {position: "b3", name: "it's probably me", lenght: "2:23"}
    ]
  }

}
