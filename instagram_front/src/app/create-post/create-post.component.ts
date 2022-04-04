import { Component, OnInit } from '@angular/core';
import {post} from '../posts/interfaces.interface';
import { MainServiceService } from '../services/main-service.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  caption: string ="";
  constructor(private service:MainServiceService) { }

  ngOnInit(): void {
  }
  onFileChanged(event:any) {

    const selectedFile = event.target.files[0]
    const data={
      "image_url":selectedFile,
      "caption": this.caption,
      'author':1
    }

  }
}
