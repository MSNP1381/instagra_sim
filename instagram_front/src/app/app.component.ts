import { Component, OnInit } from '@angular/core';
import {MainServiceService} from './services/main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'instagram_front';

  ngOnInit(){

  }
  getPosts(){
  }
}
