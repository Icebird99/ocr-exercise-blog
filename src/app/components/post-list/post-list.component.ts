import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/post';
import * as _ from 'underscore';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts : Post[];

  constructor() { 
  }

  // Sort the initial list by created_at
  ngOnInit() {
    this.sortList();
  }

  sortList = function(){
    this.posts = _.sortBy(this.posts, function(post : Post){return post.created_at;});
  }

}
