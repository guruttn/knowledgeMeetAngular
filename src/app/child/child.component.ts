import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }


  //getting data from parents
  @Input() data: string

  ngOnInit(): void {
  }

}
