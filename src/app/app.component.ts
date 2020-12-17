import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers = [];
  oddNumbers = [];

  onAddNumber(incrementNumber: number){
    if (incrementNumber % 2 === 0) {
    this.evenNumbers.push(incrementNumber);
    }
    else {
    this.oddNumbers.push(incrementNumber);
    }
  }

  //onAddNumber(numberData: {incrementNumber: number}){
    //this.numbers.push({
      //number: numberData.incrementNumber});
  //}
}
