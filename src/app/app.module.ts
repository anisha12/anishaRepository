import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent }   from './parent.component';
import { SearchService } from './search.service'


@NgModule({
  declarations: [
    AppComponent,ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,JsonpModule, ReactiveFormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
