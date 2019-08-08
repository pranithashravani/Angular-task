import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "../dataservice.service";
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  message:string;

  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage(this.message)
  }

 
}
