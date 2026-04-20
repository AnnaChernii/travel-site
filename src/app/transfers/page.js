import Container from '@/components/Container/Container';
import styles from './Transfers.module.css';
import TransfersContent from './TransfersContent';

export default function TransfersPage() {
  return (
    <main className={styles.page}>
      <Container>
        <TransfersContent />
      </Container>
    </main>
  );
}