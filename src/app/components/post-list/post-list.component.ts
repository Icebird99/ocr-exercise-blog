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

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
