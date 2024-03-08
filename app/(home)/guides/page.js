import Container from 'modules/posts/components/Container';
import { getAllPosts } from 'modules/posts/lib';
import News from 'modules/posts/components/News';

export default function Index() {
  const allPosts = getAllPosts();
  return (
    <main>
      <Container>{allPosts.length > 0 && <News posts={allPosts} />}</Container>
    </main>
  );
}
