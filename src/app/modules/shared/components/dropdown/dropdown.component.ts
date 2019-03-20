import { Component, Input } from '@angular/core';
import { Link } from 'src/app/interfaces/Link';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() links: Link[]
  @Input() placeholder: string
  isOpen: boolean

  constructor() { }

  toogle() {
    this.isOpen = !this.isOpen
  }
}
