import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";


@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
      styleUrls: ['./parent.component.css']


})

export class Parent {
    title = 'Components';
    total: number
    prop_from_parent: string = `Component Load at ${new Date()}`


}