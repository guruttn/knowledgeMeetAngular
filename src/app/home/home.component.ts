import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myDate = new Date();
  name: string = 'Guru';
  currency: any = 500;
  pipeText: string = 'I work at to the new';
  constructor() { }

  


  ngOnInit(): void {
  }
}
