import { Component, SimpleChanges, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-img-with-loader',
  templateUrl: './img-with-loader.component.html',
  styleUrls: ['./img-with-loader.component.css']
})
export class ImgWithLoaderComponent implements OnChanges{
  @Input() src: string
  @Input() spinnerWidth: string
  @Input() spinnerHeight: string
  @Input() isLoading: boolean = true

  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.src.previousValue !== changes.src.currentValue) {
      this.isLoading = true;
    }
  }
  
  onLoad() {
    this.isLoading = false
  }

  onError(event) {
    // event.target.attributes.src.value = "src/assets/no-image-icon-23493.jpg"
    this.src = "src/assets/no-image-icon-23494.png"
  }
}
