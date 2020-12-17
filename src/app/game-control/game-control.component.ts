import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  preserveWhitespaces: true
})
export class GameControlComponent implements OnInit {
  @Output() numberCreated = new EventEmitter<number>();
  No = 0;
  ref;

  constructor() { }

  ngOnInit(): void {
  }

  onAddNumber(){
    this.ref = setInterval(() => {this.numberCreated.emit(this.No=this.No+1)}, 1000);
  }
  onStopNumber(){
    clearInterval(this.ref);
  }
}
