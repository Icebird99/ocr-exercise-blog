import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/post.model';
import { PostService } from 'src/app/shared/post.service';
import { DialogService } from 'src/app/shared/dialog';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post : Post;

  constructor(
    private postService: PostService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  onLikeIt(like: boolean){
    this.postService.likePost(this.post, like);
  }

  onDelete(){
    console.log("test");
    this.dialogService.confirm({
      title: "Delete Post",
      content: "Are you sure you want to delete this post?"
    }).subscribe(result => {
      if (result){
        this.postService.deletePost(this.post);
      }
    });
  }

}
