import {Component, Inject, Input, OnInit} from '@angular/core';
import {Story} from './interfaces.interface';
import {MainServiceService} from "../services/main-service.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  @Input() storyDetails?: Story;
  url = MainServiceService.URL;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openStoryDialog() {
    if (!this.storyDetails) return;
    this.dialog.open(DialogDataExampleDialog, {
      data: this.storyDetails,
    });
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'x.html',
})
export class DialogDataExampleDialog {
  _data:any;
  url = MainServiceService.URL;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Story, private service: MainServiceService) {
   this._data=data;
  }

}
