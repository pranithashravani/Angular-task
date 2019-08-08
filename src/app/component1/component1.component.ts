import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "../dataservice.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  message:string;

  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

 
  


}
