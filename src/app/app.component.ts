import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';
  constructor(private router:Router)
  {
    this.router.events.subscribe((events)=>{
      console.log(events)
    })
  }
}
