import Container from '@/components/Container/Container';
import ContactsContent from './ContactsContent';
import styles from './Contacts.module.css';

export default function ContactsPage() {
  return (
    <main className={styles.page}>
      <Container>
        <ContactsContent />
      </Container>
    </main>
  );
}