'use client';
import { PostPreview } from 'modules/posts/components/PostPreview';

const News = ({ posts }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="grid gap-4 grid-cols-1 gap-y-8 sm:grid-cols-3">
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
    </div>
  );
};

export default News;
