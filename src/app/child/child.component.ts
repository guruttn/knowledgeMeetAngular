import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {






  //getting data from parents
  @Input() myProp: any;
  @Input() myProp1: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.myProp)
    console.log(this.myProp1)
  }

}
