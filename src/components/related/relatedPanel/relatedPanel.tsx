import { component$ } from "@builder.io/qwik";
import { useGetRandomPosts } from "~/routes/(app)/posts/[slug]";

export const RelatedPanel = component$(() => {
  const posts = useGetRandomPosts();
  if (!posts) return null;

  return (
    <>
      {posts.value.map((post) => (
        <div key={post.id} class="mb-2">
          <a
            href={`/posts/${post.slug}`}
            class="font-bold leading-tight text-sm flex gap-2"
          >
            <img
              src={post.thumbnail}
              width={120}
              height={45}
              class="rounded w-24 aspect-video"
            />
            <div>
              <div class="line-clamp-2">{post.title}</div>
              <div class="text-xs text-slate-400 font-normal">
                @{post.user.username}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
});
