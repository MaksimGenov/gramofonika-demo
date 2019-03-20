import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {
  @Input() options: string[]
  @Output() update: EventEmitter<string[]> = new EventEmitter<string[]>()
  selected: string[]

  constructor() { }

  ngOnInit() {
    this.selected = []
  }

  onClick(event) {
    let value = event.target.value

    if (event.target.checked)
      this.selected.push(value)
    else {
      let index = this.selected.indexOf(value)
      this.selected.splice(index, 1)
    }

    this.update.emit(this.selected)
  }
}
