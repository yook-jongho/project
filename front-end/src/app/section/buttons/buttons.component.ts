import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output() clickEvent =  new EventEmitter<string>();
  constructor() { }

  excuteButton(command: string){
    this.clickEvent.emit(command);
  }

  ngOnInit(): void {
  }

}
