import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  position = 'x';
  // Define base color
  // baseColor = ''; // Pass in a color name or hex value or rgb
  // fillColor = ''; // Pass in a color name or hex value or rgb

  constructor() {
  }
  onEnd() {
    console.log('Yo! You reached the end of this page');
  }
  togglePosition() {
    if ( this.position === 'x' ) {
      this.position = 'y';
    } else {
      this.position = 'x';
    }
  }
}
