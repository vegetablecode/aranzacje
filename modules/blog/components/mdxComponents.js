import Image from 'next/image';
import Link from 'next/link';

const mdxComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''}>
        {children}
      </Link>
    );
  },
  img: ({ children, ...props }) => {
    return <img {...props} className="card" />;
  },
};

export default mdxComponents;
