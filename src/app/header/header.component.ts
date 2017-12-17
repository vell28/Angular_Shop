import {Component, Input, ViewChild, ElementRef } from '@angular/core'
import { CarouselConfig } from 'ngx-bootstrap/carousel';
declare var jquery:any;
declare var $ :any;

import {Center} from '../center/center.component';

@Component({
    moduleId: module.id,
    selector: 'head-component',
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"]
})


export class Header{
    constructor(public componentOne: Center){}
    
    show = this.componentOne.cart;
    
} 