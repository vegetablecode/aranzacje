import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';

export const getPosts = cache(async () => {
  const posts = await fs.readdir('./public/posts/');

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./public/posts/${file}`;
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content };
      })
  );
});

export async function getPost(id) {
  const posts = await getPosts();
  return posts.find((post) => post.id === id);
}

export default getPosts;
