import { Component, OnInit } from '@angular/core';
import {MainServiceService} from './services/main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'instagram_front';
  storyData:any;
  postData:any;
  constructor(private service :MainServiceService){
    this.service.getPosts().subscribe(res=>{console.log(res);this.postData=res;});
    this.service.getStories().subscribe(res=>{console.log(res);this.storyData=res;});
  }
  ngOnInit(){

  }
  getPosts(){
  }
}
