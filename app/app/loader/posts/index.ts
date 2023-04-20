import PostRepositoryImpl from "~/data/repositories/PostsRepositoryImpl";
import PostService from "~/domain/usecases/PostsService";

export const PostServiceImpl = () => {
  const postRepo = new PostRepositoryImpl();
  const postService = new PostService(postRepo);
  return postService;
};
