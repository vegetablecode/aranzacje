import Link from 'next/link';
import DateFormatter from './DateFormatter';

export function PostPreview({ title, coverImage, date, slug }) {
  return (
    <Link
      as={`/guides/${slug}`}
      href="/guides/[slug]"
      className="hover:underline"
    >
      <div className="flex flex-col space-y-3">
        <img
          src={coverImage}
          className="w-full aspect-[4/3] object-cover card"
        />
        <div className="flex flex-col">
          <div className="text-sm text-gray-500">
            <DateFormatter dateString={date} />
          </div>
          <div className="text-xl font-semibold">{title}</div>
        </div>
      </div>
    </Link>
  );
}
