'use client';

import { useEffect, useState } from 'react';
import styles from './Modal.module.css';

export default function Modal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const openModal = () => setOpen(true);
    window.addEventListener('openModal', openModal);

    return () => window.removeEventListener('openModal', openModal);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setOpen(false);
      setSent(false);
    }, 1500);
  };

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={() => setOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <h2>Planning your trip</h2>

        {!sent ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />

            <button type="submit">Book now</button>
          </form>
        ) : (
          <p className={styles.success}>Request sent successfully ✓</p>
        )}

      </div>
    </div>
  );
}