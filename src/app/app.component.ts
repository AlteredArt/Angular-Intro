import { Component , ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello Me</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
  // interpolation
  title = 'Jared ';
  course = 'Angular7';
  // boolean
  flag = true;
  // style binding
  myclass ="FR";
  color ="red";
// event binding
// hide : boolean = false;
//   show(): void{
//     console.log("hello from event binding")
//   }
//   showdata(): void{
//     this.hide = !this.hide;
//   }
}
