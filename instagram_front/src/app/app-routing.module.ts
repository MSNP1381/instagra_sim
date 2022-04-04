import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { MainPageComponent } from './main-page/main-page.component';
import {StoryviewComponent} from "./storyview/storyview.component";

const routes: Routes = [
  { path: 'story/:id', component: StoryviewComponent,data: {some_data: 'some value'} },
  { path: '', component: MainPageComponent },
  { path: 'create-post', component: CreatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
