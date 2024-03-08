import Avatar from './Avatar';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';
import { PostTitle } from './PostTitle';

export function PostHeader({ title, coverImage, date, author }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mb-4 md:mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      {author ? (
        <>
          <div className="hidden md:block md:mb-12">
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="block md:hidden mb-6">
              <Avatar name={author.name} picture={author.picture} />
            </div>
            <div className="mb-6 text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
