import {Component, Inject, OnInit} from '@angular/core';
import {MainServiceService} from "../services/main-service.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
export interface DialogData {
  id:number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  storyData:any;
  postData:any;

  constructor(private service :MainServiceService){
    this.service.getPosts().subscribe(res=>{console.log(res);this.postData=res;});
    this.service.getStories().subscribe(res=>{console.log(res);this.storyData=res;});
  }

  ngOnInit(): void {
  }

}

