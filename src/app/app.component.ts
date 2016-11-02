import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';

  keyword = '';

  badword_list = ['Visual', 'Studio', '避免'];
  
  clearKeyword($event) {
    this.keyword = '';
  }

  doSearch(str) {
    this.keyword = str;
    this.title = str;
  }

  click(str) {
    this.keyword = str;
  }

  ngOnInit() {
    console.log('App Init');
  }

  ngOnChanges() {
    console.log('App Changes');
  }

  ngDoCheck() {
    console.log('App DoCheck');
  }

  data: any;

  sub: Subscription;

  constructor(private http: Http) {
    this.sub = http.get('/assets/articles.json').subscribe((value) => {
      this.data = value.json();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}
