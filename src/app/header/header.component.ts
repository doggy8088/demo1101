import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title = 'Hello World';

  titleUrl = 'http://blog.miniasp.com/';

  @Output()
  clickLogo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.title = 'The Will Will Web';
    this.clickLogo.emit(this.title);
  }

  isRed: boolean;

  changeColor() {
    this.isRed = (this.isRed) ? false : true;
  }

}
