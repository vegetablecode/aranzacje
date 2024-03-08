import { PostBody } from 'modules/blog/components/PostBody';
import getPosts, { getPost } from 'modules/blog/getPosts';
import Head from 'next/head';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  const post = await getPost(params.article);
  if (!post) return notFound();
  return (
    <>
      <title>{post.title}</title>
      <meta property="og:title" content={post.title} />
      <meta property="og:image" content={post.thumbnail} />
      <PostBody post={post} />;
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ post }));
}

export async function getStaticPaths() {
  const posts = await getPosts();
  let paths = posts.map((item) => {
    return { params: { article: item.id } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
