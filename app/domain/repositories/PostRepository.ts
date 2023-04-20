import type Post from "../entities/Post";

export default interface PostRepository {
  getPosts(): Promise<Post[]>;
  getPost(id: number | string | undefined): Promise<Post>;
}
