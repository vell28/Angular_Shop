import { Component, OnInit, Injectable, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {Phones} from '../Phones';
import{PhonesService} from '../service/phones.service';
import{Basket} from '../basket/basket.component';

@Component({
    moduleId: module.id,
    selector: 'center-component',
    templateUrl: "center.component.html",
    styleUrls: ["center.component.css"],
})

export class Center {
    constructor(
        private phoneService: PhonesService,
        private router: Router,
      ) {
            setTimeout(()=>{
                for(let key in this.phones){
                    this.collection.push(this.phones[key]);
                }
            })    
        }
        
    cart:Phones [] = [];
    phones : Phones [];
    collection: any = [];
    searchStr='';
    ngOnInit(){
        this.getPhones();
    }
    getPhones(){
        this.phoneService.getPhones()
            .then(phones => this.phones = phones);
    }
    selectedPhone(phone){
        this.cart.push(phone);
        
    } 
    selectLength(){
        console.log(this.cart);
    }
    filterName(){
        return 
    }
}