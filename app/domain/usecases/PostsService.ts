import type Post from "../entities/Post";
import type PlantRepository from "../repositories/PostRepository";

export default class PostService {
  postRepo: PlantRepository;

  constructor(ir: PlantRepository) {
    this.postRepo = ir;
  }

  async getPosts(): Promise<Post[]> {
    return this.postRepo.getPosts();
  }

  async getPost(id: number | string | undefined): Promise<Post> {
    return this.postRepo.getPost(id);
  }
}
