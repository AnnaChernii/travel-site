import Image from 'next/image';
import Link from 'next/link';
import styles from './Blog.module.css';

export default function BlogCard({ post }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{post.title}</h3>

        <p className={styles.text}>{post.text}</p>

        <Link href={`/blog/${post.id}`} className={styles.btn}>
          Read more
          <Image src="/icons/arrow-black.svg" alt="" width={46} height={10}/>
        </Link>

        <div className={styles.author}>
          <div className={styles.avatar}>
            <Image
              src={post.avatar}
              alt={post.author}
              fill
              className={styles.avatarImg}
            />
          </div>

          <div>
            <p className={styles.name}>{post.author}</p>
            <p className={styles.date}>
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}