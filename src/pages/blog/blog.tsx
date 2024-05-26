import Link from 'next/link';
import { Typography } from '@material-tailwind/react';

function Blog() {
  return (
    <div className="container mx-auto mt-8">
      <Typography variant="h2" color="blue-gray" className="mb-4">
        Blog
      </Typography>
      <div className="flex flex-col gap-4">
        <Link href="/blog/english-class-blog">
          <a className="text-blue-500 hover:underline">My Opinion on English Class</a>
        </Link>
        <Link href="/blog/entrepreneurship-days-blog">
          <a className="text-blue-500 hover:underline">Entrepreneurship Days Recap</a>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
