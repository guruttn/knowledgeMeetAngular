import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp2';
  message: any = new Date();
  constructor() {
    setTimeout(() => {
      this.message = new Date();
    }, 5000);
  }


}
