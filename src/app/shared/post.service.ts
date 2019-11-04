import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
   }

   emitPosts(){
     this.postsSubject.next(this.posts);
   }

   savePosts(){
     //TODO
   }

   getPosts(){
    // TODO: firebase
    // For fun, let's provide some initial posts, with random created_at and likes
    this.posts = [
      new Post(
        "My first post", 
        "Lorem ipsum dolor sit amet, te noluisse volutpat dissentias his, vel et mazim ludus vivendo, ne pro autem labores offendit. Zril feugiat feugait vis at. Mel partem dolorum id. His omnis exerci temporibus ex. No brute postulant periculis mei, dicam molestie qui at, vim idque zril nemore id.",
        new Date(new Date().getTime() - Math.ceil(Math.random() * 1000 * 60 * 60 * 24) - 1000*60*60*24*2),
        Math.ceil(Math.random() * 20 - 5)),
      new Post(
        "My second post, what imagination!", 
        "Te vim movet hendrerit. Has novum indoctum definitiones ea. Elit diceret nominati an has, tale numquam mel cu. Eu facer dicta interesset quo, ei vix vero maiorum.",
        new Date(new Date().getTime() - Math.ceil(Math.random() * 1000 * 60 * 60 * 24) - 1000*60*60*24*1),
        Math.ceil(Math.random() * 20 - 5)),
      new Post(
        "Another day, another post...", 
        "Essent explicari persecuti ne usu, soleat corrumpit instructior pri ne. Has menandri volutpat aliquando ei. Vim cu delectus apeirian adolescens, enim reque ne cum. Eu pro clita delicatissimi, inermis platonem est et. Solum phaedrum menandri an nam, ex causae commodo vivendum qui.",
        new Date(new Date().getTime() - Math.ceil(Math.random() * 1000 * 60 * 60 * 24)),
        Math.ceil(Math.random() * 20 - 5))
    ];   
    this.emitPosts();
  }

  createPost(post: Post){
    this.posts.push(post);
    this.posts = this.posts.slice();
    this.emitPosts();
  }

  deletePost(post: Post){
    //TODO
  }

}
