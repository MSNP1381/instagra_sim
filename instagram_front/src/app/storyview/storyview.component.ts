import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-storyview',
  templateUrl: './storyview.component.html',
  styleUrls: ['./storyview.component.scss']
})
export class StoryviewComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    console.log("initTestEnvironment");
    route.data.subscribe(d=>{console.log("d: ",d)});
  }
  ngOnInit() {
     this.route
      .data
      .subscribe(v => console.log(v));
  }


}
