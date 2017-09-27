import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {PictureComponent} from './picture/picture.component';

const routes: Routes = [
  { path: 'picture', component: PictureComponent },
  { path: 'content', component: ContentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

