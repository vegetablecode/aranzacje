import getPosts from 'modules/blog/getPosts';
import { getAllPosts } from 'modules/posts/lib';

const homepage = process.env.NEXT_PUBLIC_HOSTNAME;

export default async function sitemap() {
  const posts = await getPosts();
  const guides = getAllPosts();

  const guideUrls = guides.map((post) => ({
    url: `${homepage}/posts/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
  }));

  const blogs = posts.map((post) => ({
    url: `${homepage}/blog/${post.id}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
  }));

  const routes = [
    '',
    '/photos',
    '/signup',
    '/login',
    '/blog',
    '/blog/privacy-policy',
    '/blog/tos',
  ].map((route) => ({
    url: `${homepage}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs, ...guideUrls];
}
