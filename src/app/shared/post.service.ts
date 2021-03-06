import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import * as _ from 'underscore';
import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor(
    private toastr: ToastrService
  ) {
    this.getPosts();
  }

  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  savePosts(){
    firebase.database().ref('/posts').set(_.map(this.posts, function(post){
      // As firebase doesn't accept Date object, we convert created_at
      // in timestamp
      return {
        title: post.title,
        content: post.content,
        id: post.id,
        loveIts: post.loveIts,
        created_at: post.created_at ? post.created_at.getTime() : new Date().getTime()
      }
    }));
  }

   getPosts(){
    firebase.database().ref('/posts')
    .on('value', (data: Datasnapshot) => {
        this.posts = data.val() ? data.val() : [];
        // When retrieving the posts, we need to convert created_at
        // back to a date object
        this.posts = _.map(this.posts, function(post){
          post.created_at = new Date(post.created_at);
          return post;
        });
        this.emitPosts();
      }
    );

    // This array for the inital posts is not used anymore.
    // I keep it for the Math one the dates and to recreate the posts if needed
    const posts = [
      new Post(
        2,
        "My second post, what imagination!",
        "Te vim movet hendrerit. Has novum indoctum definitiones ea. Elit diceret nominati an has, tale numquam mel cu. Eu facer dicta interesset quo, ei vix vero maiorum.",
        new Date(new Date().getTime() - Math.ceil(Math.random() * 1000 * 60 * 60 * 24) - 1000*60*60*24*1),
        Math.ceil(Math.random() * 20 - 5)),
      new Post(
        1,
        "My first post",
        "Lorem ipsum dolor sit amet, te noluisse volutpat dissentias his, vel et mazim ludus vivendo, ne pro autem labores offendit. Zril feugiat feugait vis at. Mel partem dolorum id. His omnis exerci temporibus ex. No brute postulant periculis mei, dicam molestie qui at, vim idque zril nemore id.",
        new Date(new Date().getTime() - Math.ceil(Math.random() * 1000 * 60 * 60 * 24) - 1000*60*60*24*2),
        Math.ceil(Math.random() * 20 - 5)),
      new Post(
        3,
        "Another day, another post...",
        "Essent explicari persecuti ne usu, soleat corrumpit instructior pri ne. Has menandri volutpat aliquando ei. Vim cu delectus apeirian adolescens, enim reque ne cum. Eu pro clita delicatissimi, inermis platonem est et. Solum phaedrum menandri an nam, ex causae commodo vivendum qui.",
        new Date(new Date().getTime() - Math.ceil(Math.random() * 1000 * 60 * 60 * 24)),
        Math.ceil(Math.random() * 20 - 5))
    ];

    this.sortPosts();
    this.emitPosts();
  }

  likePost(post: Post, like: boolean){
    _.find(this.posts, function(p){
      return p.id === post.id
    }).loveIts += like ? 1 : -1;
    this.savePosts();
    this.emitPosts();
  }

  createPost(post: Post){
    post.created_at = new Date();
    if (this.posts.length > 0){
      post.id = _.max(this.posts, function(post){return post.id}).id + 1;
    } else {
      post.id = 1;
    }
    this.posts.push(post);
    this.posts = this.posts.slice();
    this.savePosts();
    this.emitPosts();
    this.toastr.success("Post created!");
  }

  deletePost(post: Post){
    this.posts = _.reject(this.posts, function(p){return p.id === post.id});
    this.savePosts();
    this.emitPosts();
    this.toastr.warning("Post deleted!");
  }

  sortPosts = function(){
    this.posts = _.sortBy(this.posts, function(post : Post){return post.created_at;});
  }


}
