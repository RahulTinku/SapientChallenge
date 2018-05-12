import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';

import { GamesService } from './games/games.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
