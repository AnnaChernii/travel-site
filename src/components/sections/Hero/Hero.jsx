import styles from './Hero.module.css';
import Container from '@/components/Container/Container';

export default function Hero() {
  return (
    <section className={styles.hero}>
        <Container>
            <div className={styles.heroContent}>
                <h1 className={styles.heading}>
                  <span className={styles.small}>discover</span>
                  <span className={styles.big}>GREECE</span>
                </h1>
                <p>
                    Private tours to the most breathtaking destinations
                </p>
            </div>
        </Container>
      
    </section>
  );
}