import { json } from "@remix-run/node";
import { Link, type V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { PostServiceImpl } from "~/app/loader/posts";

export const loader = async () => {
  const posts = await PostServiceImpl().getPosts();
  return json({
    posts,
  });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main className="w-11/12 mx-auto">
      <h1 className="text-3xl py-5">Posts</h1>
      <div className="grid grid-cols-3 justify-center gap-5 mx-auto">
        {posts.map((post, index) => (
          <div className="card bg-base-100 shadow-xl" key={index}>
            <div className="relative w-full h-56">
              <img
                src={`https://picsum.photos/id/${post.id}/400/200`}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">Post {index + 1}</h2>
              <p>{post.title}</p>
              <div className="card-actions justify-end">
                <Link to={post.id.toString()}>
                  <button className="btn btn-primary">Read</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
