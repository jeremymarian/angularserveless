import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularpractice1';
  tester = document.location.href;
  offSet = true;
  constructor() {
    console.log(this.tester);

    if (this.tester === 'https://csud2023.github.io/') {
      this.offSet = false;
    } else {
      this.offSet = true;
    }
  }
}
