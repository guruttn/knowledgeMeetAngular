import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";


@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html'

})

export class Parent {
    title = 'Components';
    total: number
    prop_from_parent: string = "property from root parent"


}