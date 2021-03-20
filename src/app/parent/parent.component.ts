import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";


@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
      styleUrls: ['./parent.component.css']


})

export class Parent {
    title = 'My component';
    total: number
    prop_from_parent: any = {name:'guru',age:28}


}