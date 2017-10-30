import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DialogComponent } from './dialog/dialog.component';
// import {PictureComponent} from './picture/picture.component';

import { DataServiceService } from './data-service/data-service.service';
import { DataProcessService } from './data-process/data-process.service';
// import { AppRoutingModule } from './app-routing.module';

import { CheckboxModule,
  DataTableModule,
  SharedModule,
  SliderModule,
  DropdownModule,
  SelectButtonModule,
  FieldsetModule,
  RatingModule,
  ButtonModule,
  DialogModule,
  InputTextModule,
  InputSwitchModule,
  PanelModule } from 'primeng/primeng';


// for firebase
// import { firebaseConfig } from './config/firebaseConfig';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    // PictureComponent,
    DataTableComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    // AppRoutingModule,
    CheckboxModule,
    DataTableModule,
    SharedModule,
    SliderModule,
    DropdownModule,
    SelectButtonModule,
    FieldsetModule,
    RatingModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputSwitchModule,
    PanelModule
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  providers: [DataServiceService, DataProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
