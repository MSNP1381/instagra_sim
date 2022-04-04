import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { StoriesComponent ,DialogDataExampleDialog} from './stories/stories.component';
import { StoryviewComponent } from './storyview/storyview.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreatePostComponent } from './create-post/create-post.component'
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    StoriesComponent,
    StoryviewComponent,
    MainPageComponent,
    DialogDataExampleDialog,
    CreatePostComponent,
  ],

  imports: [MatDialogModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule, MatFormFieldModule, MatInputModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
