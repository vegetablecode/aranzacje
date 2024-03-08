import Metadata from 'common/components/layout/Metadata';
import PostList from 'modules/blog/components/PostList';
import getPosts from 'modules/blog/getPosts';
import { Suspense } from 'react';

const Page = async () => {
  const posts = await getPosts();
  return (
    <div>
      <Metadata />
      <Suspense fallback={<div>Loading...</div>}>
        <PostList posts={posts} paginate={false} />
      </Suspense>
    </div>
  );
};

export default Page;
