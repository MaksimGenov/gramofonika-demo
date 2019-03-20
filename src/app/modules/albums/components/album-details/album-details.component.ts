import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/Link';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album
  tabLinks: Link[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => console.log(params))

    this.album = {
      artist: "sting",
      name: "ten Summoner's tales",
      genre: "rock",
      styles: ["Soft Rock", "Pop Rock"],
      image: {url: ""}
    }

    this.tabLinks = [
      {name: "Releases", url: "releases"},
      {name: "Records for sale", url: "records-for-sale"},
      {name: "Tracklist", url: "tracklist"}
    ]
  }

  addToWishlist() {
    alert("not implemented!")
  }
}
