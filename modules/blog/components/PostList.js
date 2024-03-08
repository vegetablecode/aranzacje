'use client';

import Link from 'next/link';
import { useState } from 'react';

const PostList = (props) => {
  const [showMore, setShowMore] = useState(4);

  if ('skeleton' in props) {
    return 'skeleton';
  }

  const { posts, paginate } = props;

  return (
    <>
      <h1 className="text-3xl font-bold pb-8">Decoratly Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.slice(0, paginate ? showMore : undefined).map((post) => {
          const date = new Date(post.date).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
          });

          return (
            <Link href={'/blog/' + post.id}>
              <button className="card bg-white shadow overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt="thumbnail"
                  className="h-56 object-cover w-full"
                />
                <div className="p-4 text-center flex flex-col items-center space-y-2">
                  <div className="text-lg font-bold line-clamp-2">
                    {post.title}
                  </div>
                  <div className="text-sm">{date.toString()}</div>
                </div>
              </button>
            </Link>
          );
        })}
      </div>
      {paginate && showMore < posts.length && (
        <button
          className="mt-8"
          onClick={() => {
            setShowMore(showMore + 4);
          }}
        >
          Show More
        </button>
      )}
    </>
  );
};

export default PostList;
