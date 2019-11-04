import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from 'src/app/shared/post.model';
import { PostService } from 'src/app/shared/post.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onCreatePost = function(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const post = new Post(0, title, content);
    this.postService.createPost(post);
    this.router.navigate(['/posts']);
  }

}
