'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Slug.module.css';
import Container from '@/components/Container/Container';

export default function PostClient({ post }) {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <main className={styles.main}>

      {/* HERO (background image) */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className={styles.overlay} />

        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.subtitle}>
              <div>{post.author}</div>
              <div><i>{new Date(post.date).toLocaleDateString('en-GB')}</i></div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTENT */}

      <Container>
        {/* TEXT */}
        <section className={styles.textSection}>
    
            {post.text.map((paragraph, index) => (
              <p key={index} className={styles.text}>
                {paragraph}
              </p>
            ))}
        
        </section>

        {/* GALLERY */}
        <section className={styles.gallerySection}>
          <h2 className={styles.galleryTitle}>Gallery</h2>

          <div className={styles.gallery}>
            {post.gallery?.map((img, i) => (
              <div
                key={i}
                className={styles.galleryItem}
                onClick={() => setActiveImg(img)}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* AUTHOR */}
        <section className={styles.authorSection}>
          <h2 className={styles.sectionTitle}>About the author</h2>

          <div className={styles.authorBox}>

            <div className={styles.authorAvatar}>
              <Image
                src={post.avatar}
                alt={post.author}
                fill
                sizes="120px"
              />
            </div>

            <div className={styles.authorInfo}>
              <h3 className={styles.authorName}>{post.author}</h3>

              <p className={styles.authorText}>
                Travel writer and storyteller sharing experiences from Greece and
                beyond. Focused on culture, local food, and hidden places that
                don’t always appear in guidebooks.
              </p>
            </div>

          </div>
        </section>

      </Container>
 
      {/* MODAL */}
      {activeImg && (
        <div className={styles.modal} onClick={() => setActiveImg(null)}>
          <button
            className={styles.close}
            onClick={() => setActiveImg(null)}
          >
            ✕
          </button>

          <div className={styles.modalImg}>
            <Image src={activeImg} alt="" fill />
          </div>
        </div>
      )}

    </main>
  );
}