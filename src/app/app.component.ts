import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfgr';
  showHeader = true;
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          console.log(event.url);
          if (event.url === '/login') {
            this.showHeader = false;
          } else {
            this.showHeader = true;
          }
        }
      }
    );
  }
}
