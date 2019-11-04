import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/post.model';
import * as _ from 'underscore';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/shared/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts : Post[];
  postsSubscription: Subscription;

  constructor(
    private postService: PostService,
    private router: Router
  ) {}

  // Sort the initial list by created_at
  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.postService.emitPosts();
    //this.sortList();
  }

  sortList = function(){
    this.posts = _.sortBy(this.posts, function(post : Post){return post.created_at;});
  }

}
