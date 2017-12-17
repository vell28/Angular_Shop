import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap';
import { RouterModule }   from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { Center } from './center/center.component';
import {PhonesService} from './service/phones.service';
import {DetailPhonesComponent} from './detaile/phone.detaile.component';
import {Footer} from './footer/footer.component';
import {SearchPipe} from './pipes/search.pipe';
import { Basket } from './basket/basket.component'
import {FilterName} from './pipes/filterName.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Center,
    DetailPhonesComponent,
    Footer,
    Basket,
    SearchPipe,
    FilterName
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'phones',
        component: Center
      },{
        path: '',
        redirectTo: '/phones',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: DetailPhonesComponent
      }
    ]),
    NgxPaginationModule
  ],
  providers: [PhonesService, Center],
  bootstrap: [AppComponent]
})
export class AppModule { }
