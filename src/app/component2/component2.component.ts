import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
message: string ="child here"
@Output() public childevent=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
fireEvent()
{
  this.childevent.emit(this.message);
}
}
