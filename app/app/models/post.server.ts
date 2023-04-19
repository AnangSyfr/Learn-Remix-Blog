type Post = {
  slug: string;
  title: string;
};

export const getPosts = async (): Promise<Array<Post>> => {
  return [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "my-second-post",
      title: "My Second Post",
    },
  ];
};
