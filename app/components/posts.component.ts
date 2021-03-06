import {Component} from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'posts',
  templateUrl: 'posts.component.html',
  providers: [PostsService]
})

export class PostsComponent {

  posts: Post[];

  constructor(private postsService: PostsService) {

    this.postsService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts,
     ( err: string) => {
        console.log(err);
      }
    })
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
}