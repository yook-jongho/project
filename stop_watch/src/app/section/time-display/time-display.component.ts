import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData = 'false';
  minite :number = 0;
  second : number =0;
  mil_second :number =0;

  timeInterval;
  constructor() {}

  timeStart(){
    this.timeInterval= setInterval(()=>{
      this.mil_second++;
      if(this.mil_second >= 100){
        this.mil_second=0;
        this.second++;
      }
      if(this.second >= 60){
        this.second =0;
        this.minite++;
      }
    },10)
  }

  timeStop(){
    clearInterval(this.timeInterval)
  }

  timeReset(){
    this.timeStop();
    this.minite =0
    this.second =0
    this.mil_second =0
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if(propName == 'inputData'){
        switch(changes[propName].currentValue){
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }
      }
      // const chng = changes[propName];
      // const cur  = JSON.stringify(chng.currentValue);
      // const prev = JSON.stringify(chng.previousValue);
      // this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
  }

}
