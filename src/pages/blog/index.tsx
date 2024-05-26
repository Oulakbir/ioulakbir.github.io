import Link from 'next/link';
import { Typography } from '@material-tailwind/react';

const BlogIndex = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h3" className="mb-6">
        Blog
      </Typography>
      <ul>
        <li>
          <Link href="/blog/english-class-blog">
            <a className="text-blue-500 hover:underline">My Thoughts on English Class</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/entrepreneurship-days-blog">
            <a className="text-blue-500 hover:underline">Three Days of Entrepreneurship at Our Campus</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogIndex;
