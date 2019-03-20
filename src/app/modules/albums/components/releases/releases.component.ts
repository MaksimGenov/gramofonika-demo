import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {
  releases: Object[]
  genres: string[]
  countries: string[]
  selectedFilters: string[] = []
  selectedCountries: string[] = []
  selectedGenres: string[] = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      console.log("album id: " + params.albumId)
    })

    this.releases = Array(5).fill({
      artist: "sting",
      name: "ten summoner's tales",
      genre: "rock",
      styles: ["Soft Rock", "Pop Rock"],
      image: {url: ""}
    })

    this.genres = ["rock", "pop", "jazz", "r&b"]
    this.countries = ["Russia", "Bulgaria", "Germany", "US"]
  }

  addToCollection() {
    alert("not implemented")
  }

  onGenreSelect(geners: string[]) {
    this.selectedGenres = geners
    this.updateSelectedFilters()
  }

  onCountrySelect(countries: string[]) {
    this.selectedCountries = countries
    this.updateSelectedFilters()
  }

  updateSelectedFilters() {
   this.selectedFilters = []
   this.selectedFilters.push(...this.selectedCountries)
   this.selectedFilters.push(...this.selectedGenres)
  }

}
