import { Component, OnInit,Input,Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-component2',
  template: `<h2>{{"hello " + parentData}}</h2>
`,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
@Input() public parentData;
  constructor() { }

  ngOnInit() {
  }
 

}
