import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors=['Aqua', 'BlueViolet', 'CornflowerBlue', 'DarkCyan', 'DarkSlateBlue', 'DarkSlateGray', 'LawnGreen'];
  divColors = [this.colors[Math.floor(Math.random()*7)],
  this.colors[Math.floor(Math.random()*7)],
  this.colors[Math.floor(Math.random()*7)],
  this.colors[Math.floor(Math.random()*7)],
  this.colors[Math.floor(Math.random()*7)],
  this.colors[Math.floor(Math.random()*7)],
  this.colors[Math.floor(Math.random()*7)]];
}
