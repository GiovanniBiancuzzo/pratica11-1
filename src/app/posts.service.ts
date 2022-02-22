import { Post } from "./models/post";

let posts : Post[] = [
  {
    id: 1,
    title: 'Primo post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius officia voluptas aliquam hic corporis tenetur facere, tempora reiciendis obcaecati omnis, qui dignissimos architecto porro, excepturi rerum ab ipsam voluptatibus!',
    active: true,
    type: "news"
  },
  {
    id: 2,
    title: 'Secondo post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius officia voluptas aliquam hic corporis tenetur facere, tempora reiciendis obcaecati omnis, qui dignissimos architecto porro, excepturi rerum ab ipsam voluptatibus!',
    active: false,
    type: "politic"
  },
  {
    id: 3,
    title: 'Terzo post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius officia voluptas aliquam hic corporis tenetur facere, tempora reiciendis obcaecati omnis, qui dignissimos architecto porro, excepturi rerum ab ipsam voluptatibus!',
    active: false,
    type: "news"
  },
  {
    id: 4,
    title: 'Quarto post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius officia voluptas aliquam hic corporis tenetur facere, tempora reiciendis obcaecati omnis, qui dignissimos architecto porro, excepturi rerum ab ipsam voluptatibus!',
    active: true,
    type: "education"
  },
  {
    id: 5,
    title: 'Quinto post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius officia voluptas aliquam hic corporis tenetur facere, tempora reiciendis obcaecati omnis, qui dignissimos architecto porro, excepturi rerum ab ipsam voluptatibus!',
    active: false,
    type: "politic"
  }
];
export function getPosts() {
  return posts;
}

export function updatePosts(data: Partial<Post>, id:number) {
  posts = posts.map(post => post.id == id? {...post, ...data} : post);
  return posts.find(post=> post.id == id) as Post;
}

export class PostsService {

  constructor() { }
}
