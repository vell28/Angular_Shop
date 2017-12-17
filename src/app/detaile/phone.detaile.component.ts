import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Phones} from '../Phones'
import{PhonesService} from '../service/phones.service';

@Component({
    moduleId: module.id,
    selector: 'phone-detail',
    templateUrl: 'phone.detaile.component.html',
    styleUrls: ['phone.detaile.component.css']

})
export class DetailPhonesComponent implements OnInit {
    constructor(
        private phoneService: PhonesService,
        private route: ActivatedRoute,
        private location: Location
      ) {}

    @Input() phone: Phones;

    ngOnInit() {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.phoneService.getPhone(+params.get('id')))
          .subscribe(phone => this.phone = phone);
    }

    goBack(): void {
        this.location.back();
    }
}