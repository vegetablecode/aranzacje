import { MDXRemote } from 'next-mdx-remote/rsc';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import remarkToc from 'remark-toc';
import mdxComponents from './mdxComponents';
import Link from 'next/link';
import Score from 'modules/landing/components/Score';
import Logos from 'modules/landing/components/Logos';
import Head from 'next/head';

export function PostBody({ post }) {
  return (
    <div className="prose text-left">
      <h1 className="text-center">{post.title}</h1>
      <div className="text-center">
        <Link href="/blog/authors/kamil-uhryn">
          <button className="text-gray-500 text-sm text-center">
            Published by Kamil Uhryn
          </button>
        </Link>
      </div>
      <img src={post.thumbnail} alt="thumbnail" className="card" />
      <MDXRemote
        source={post?.body}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkToc],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          },
        }}
        components={mdxComponents}
      />
      <div className="flex flex-col space-y-5">
        <div className="text-5xl font-black">
          Transform your interior photos with Decoratly 🏡
        </div>
        <div className="opacity-80 text-sm">
          Upload a photo of your room and transform it into a new style ✨
        </div>
        <img alt="preview" src="/preview.png" className="card" />
        <div className="flex text-left py-4 flex-col space-y-4">
          <div>
            Do you love browsing through beautiful interior designs on Pinterest
            or Instagram? Do you wish you could see how your own home would look
            like in different styles? Do you want to unleash your creativity and
            have fun with interior design?
          </div>

          <div>
            If you answered yes to any of these questions, then you need
            Decoratly.
          </div>

          <div>
            Decoratly is a website that lets you turn any photo of an interior
            into a stunning new style using artificial intelligence. Whether you
            want to redecorate your living room, bedroom, kitchen, or any other
            space, Decoratly can help you visualize your dream design in
            minutes.
          </div>
          <div className="text-2xl font-bold">How does Decoratly work?</div>
          <ul className="steps steps-vertical lg:steps-horizontal lg:py-12">
            <li className="step step-primary">Upload your photo</li>
            <li className="step step-primary">
              Choose a style or build your own
            </li>
            <li className="step step-primary">Watch as AI creates designs</li>
            <li className="step step-primary">Save, share, or print designs</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center pt-8">
          <div className="py-12">
            <Link href="/photos">
              <button className="btn btn-primary">
                Upload a photo now! ✨
              </button>
            </Link>
          </div>
          <Score />
          <Logos />
        </div>
      </div>
    </div>
  );
}
