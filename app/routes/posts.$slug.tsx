import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { type V2_MetaFunction, useLoaderData, Link } from "@remix-run/react";
import { PostServiceImpl } from "~/app/loader/posts";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async ({ params }: LoaderArgs) => {
  const post = await PostServiceImpl().getPost(params.slug);
  return json({ post });
};

export default function PostSlug() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto max-w-4xl my-10">
      <div className="card bg-base-100 shadow-xl">
        <div className="relative w-full h-56">
          <img
            src={`https://picsum.photos/id/${post.id}/1000/300`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">Post {post.id + 1}</h2>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <div className="card-actions">
            <Link to="/posts">
              <button className="btn btn-warning">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
