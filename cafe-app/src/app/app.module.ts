import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UiSelectComponent} from './ui.select.component';
import {HttpModule} from '@angular/http';
import {PostService} from './post.service';

import {JsonpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UiSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
