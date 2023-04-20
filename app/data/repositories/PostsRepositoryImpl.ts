import type Post from "~/domain/entities/Post";
import type PostRepository from "~/domain/repositories/PostRepository";
import axios from "axios";

export default class PostRepositoryImpl implements PostRepository {
  async getPosts(): Promise<Post[]> {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }

  async getPost(id: number | string): Promise<Post> {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    return data;
  }
}
