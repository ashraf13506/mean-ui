import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './COMPONENTS/comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './COMPONENTS/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
