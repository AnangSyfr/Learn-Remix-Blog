import { json } from "@remix-run/node";
import { Link, type V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/app/models/post.server";

export const loader = async () => {
  return json({
    posts: await getPosts(),
  });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link to={post.slug} className="text-blue-700 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
