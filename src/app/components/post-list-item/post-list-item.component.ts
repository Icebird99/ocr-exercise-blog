import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post : Post;

  constructor() { }

  ngOnInit() {
  }

}
