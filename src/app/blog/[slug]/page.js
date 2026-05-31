import { notFound } from 'next/navigation';
import posts from '@/data/blog.json';
import PostClient from './PostClient';

export default async function Page({ params }) {
  const { slug } = await params; 

  const id = Number(slug);

  if (Number.isNaN(id)) {
    return notFound();
  }

  const post = posts.find(p => p.id === id);

  if (!post) {
    return notFound();
  }

  return <PostClient post={post} />;
}