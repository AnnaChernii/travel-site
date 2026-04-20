'use client';

import styles from './Contacts.module.css';
import Image from 'next/image';

export default function ContactsContent() {

  const openModal = () => {
    window.dispatchEvent(new Event('openModal'));
  };

  return (
    <div className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Contact us</h1>

        <p>
          We are here to help you plan your journey across Greece.
          Whether you need a private transfer, a custom tour, or assistance
          with your travel itinerary — our team is ready to assist you.
        </p>

        <p>
          Reach out anytime. We usually respond within a few hours and always
          aim to provide clear, fast and helpful communication.
        </p>

        <button className={styles.btn} onClick={openModal}>
            Book now
            <Image src="/icons/arrow-black.svg" alt="" width={46} height={10}/>
        </button>
      </section>

      {/* CONTACT DETAILS */}
      <section className={styles.section}>
        <h2>Get in touch</h2>

        <div className={styles.card}>
          <p className={styles.label}>Location</p>
          <p>Kyiv, Ukraine</p>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>Phone</p>
          <p>+38 097 777 66 55</p>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>Email</p>
          <p>good@travel.com</p>
        </div>
      </section>

      {/* INFO BLOCK */}
      <section className={styles.section}>
        <h2>Working hours</h2>

        <div className={styles.textBlock}>
          <p>
            Our support team is available daily to assist with bookings,
            transfers, and travel planning across Greece.
          </p>

          <p>
            We recommend contacting us in advance during high season,
            especially for island transfers and private tours.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to start your journey?</h2>
        <p>
          Let us help you organize a comfortable and seamless travel experience
          across Greece.
        </p>

        <button className={styles.btn} onClick={openModal}>
            Book now
            <Image src="/icons/arrow-black.svg" alt="" width={46} height={10}/>
        </button>
      </section>

    </div>
  );
}