import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from 'src/app/shared/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() post : Post;
  @Output('post') _post = new EventEmitter<Post>();

  constructor() { 
    this.post = new Post("","");
  }

  ngOnInit() {
  }

  createPost = function(){
    this.post.created_at = new Date();
    this._post.emit(this.post);
    this.post = new Post("","");
  }

}
