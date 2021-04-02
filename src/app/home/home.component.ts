import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myDate = new Date();
  name: string = 'Guru';
  currency: any = 50000000;
  pipeText: string = 'I work at to the new';
  constructor() { }

  obsFunction = () => {
    const simpleObservable = new Observable((observer) => {

      // observable execution
      const timer = setInterval(() => { observer.next("bla bla bla"); observer.complete()},1000)
      setTimeout(() => {
        clearInterval(timer);
      },5000)
    });
    simpleObservable.subscribe((value: any) => {
      console.log(value);
    });
  }
  

 

  ngOnInit(): void {
    this.obsFunction()
  }
}
