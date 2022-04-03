import {Component, Input, OnInit} from '@angular/core';
import {Story} from './interfaces.interface';
import {MainServiceService} from "../services/main-service.service";
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  @Input() storyDetails?:Story;
  url=MainServiceService.URL;
  constructor() { }

  ngOnInit(): void {
  }

}
