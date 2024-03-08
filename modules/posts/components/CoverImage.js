import Link from 'next/link';
import Image from 'next/image';
import classNames from 'common/utils/classNames';

const CoverImage = ({ title, src, slug }) => {
  const image = (
    <div className="card overflow-hidden h-[350px] flex justify-center items-center">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={classNames('shadow-sm card w-full', {
          'hover:shadow-lg transition-shadow duration-200': slug,
        })}
        width={1300}
        height={630}
      />
    </div>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
