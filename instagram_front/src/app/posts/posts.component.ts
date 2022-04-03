import {Component, Input, OnInit} from '@angular/core';
import {post} from './interfaces.interface';
import {MainServiceService} from '../services/main-service.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
@Input() postDetails?: post ;
url=MainServiceService.URL;
  constructor(private service :MainServiceService) { }

  ngOnInit(): void {
  }
  onLikeClick(){
    let number=1;
    if (!this.postDetails)
      return ;
    if(this.postDetails.is_liked)number=-1
    this.postDetails.likes+=number;
    this.service.likeUnlikePost(this.postDetails.id,number).subscribe(res=>console.log(res));
this.postDetails.is_liked=!this.postDetails.is_liked;

  }
}
