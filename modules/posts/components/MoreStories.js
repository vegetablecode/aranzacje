import { PostPreview } from './PostPreview';

export function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid gap-4 grid-cols-1 gap-y-8 sm:gap-y-0 sm:grid-cols-3">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
