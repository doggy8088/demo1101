import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  keyword = '';

  clearKeyword($event) {
    this.keyword = '';
  }

  keywordKeyUp($event: KeyboardEvent) {
    console.log($event);
    var elm = $event.target as HTMLInputElement;
    if($event.keyCode == 13) {
      this.keyword = elm.value;
    }
  }
}
