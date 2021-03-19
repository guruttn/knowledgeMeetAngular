import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  show = false;
  setClass
  data: String = "deafult_value";

  list = [{
    name: "user1",
    id: 1
  }, {
    name: "user2",
    id: 2
  }, {
    name: "user3",
    id: 3
  }]

  onShow() {
    this.show = true
  }

  ngOnInit(): void {
  }
}
