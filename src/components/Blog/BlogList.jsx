'use client';

import { useState, useEffect } from 'react';
import styles from './Blog.module.css';
import BlogCard from './BlogCard';
import posts from '@/data/blog.json';

export default function BlogList() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(9);

  // mobile-first responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerPage(4);
      } else if (window.innerWidth < 1024) {
        setPerPage(6);
      } else {
        setPerPage(9);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const totalPages = Math.ceil(sorted.length / perPage);

  const start = page * perPage;
  const currentPosts = sorted.slice(start, start + perPage);

  return (
    <section className={styles.blog}>
      <div className={styles.grid}>
        {currentPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={() => setPage(p => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          ←
        </button>

        <span>
          {page + 1} / {totalPages}
        </span>

        <button
          onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
        >
          →
        </button>
      </div>
    </section>
  );
}