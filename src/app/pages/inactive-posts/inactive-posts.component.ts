import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { getPosts, updatePosts } from 'src/app/posts.service';

@Component({
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  posts!: Post[];

  constructor() { }

  ngOnInit(): void {
    const posts = getPosts();
    this.posts = posts;
  }

  onActivePosts(id: number, i:number) {
    updatePosts({active: true}, id);
    this.posts.splice(i,1);
  }
}
