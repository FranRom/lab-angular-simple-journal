import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

import {routes} from './routes';

import { PostServiceService } from './services/post-service.service';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
