import Container from '@/components/Container/Container';
import BlogList from '@/components/Blog/BlogList';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import styles from './page.module.css';

export default function BlogPage() {
  return (
    <main className={styles.blog}>
      <Container>
        <h1 className={styles.pageTitle}>Blog</h1>
        <p className={styles.pageSubtitle}>
          Our blog offers practical travel tips for exploring Greece: where to relax, where to eat, and what to see
        </p>

        <BlogList />
      </Container>

      <ScrollToTop />
    </main>
  );
}