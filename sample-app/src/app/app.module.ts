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
import { DataProcessService } from './data-process/data-process.service';
import { AppRoutingModule } from './app-routing.module';

import {CheckboxModule,
  DataTableModule,
  SharedModule,
  SliderModule,
  DropdownModule,
  SelectButtonModule,
  FieldsetModule,
  RatingModule,
  ButtonModule,
  DialogModule } from 'primeng/primeng';
import { DataTableComponent } from './data-table/data-table.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UiSelectComponent,
    ContentComponent,
    PictureComponent,
    DataTableComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    CheckboxModule,
    DataTableModule,
    SharedModule,
    SliderModule,
    DropdownModule,
    SelectButtonModule,
    FieldsetModule,
    RatingModule,
    ButtonModule,
    DialogModule
  ],
  providers: [PostService, DataServiceService, DataProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
