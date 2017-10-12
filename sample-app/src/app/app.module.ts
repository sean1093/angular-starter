import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {UiSelectComponent} from './ui.select.component';
import {ContentComponent} from './content/content.component';
import {PictureComponent} from './picture/picture.component';

import {HttpModule} from '@angular/http';
import {PostService} from './post.service';



import { DataServiceService } from './data-service/data-service.service';
import { AppRoutingModule } from './app-routing.module';

import {MultiSelectModule,
  DataTableModule,
  SharedModule,
  SliderModule,
  DropdownModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    UiSelectComponent,
    ContentComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    MultiSelectModule,
    DataTableModule,
    SharedModule,
    SliderModule,
    DropdownModule
  ],
  providers: [PostService, DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
