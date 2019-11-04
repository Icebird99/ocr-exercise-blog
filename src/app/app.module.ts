import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { LikeIconComponent } from './components/like-icon/like-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    PostFormComponent,
    LikeIconComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
