import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HomeService } from '../home-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiResponse: any = [];

  constructor(private homeService:HomeService) { }

  


  ngOnInit(): void {
    this.homeService.getConfig().subscribe((success: any) => {
      console.log(success);
      this.apiResponse = success;
    }, (error: any) => {
      console.log(error);
      
    })
  }
}
