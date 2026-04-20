'use client';

import React from 'react';
import styles from './Tours.module.css';
import Container from '@/components/Container/Container';
import Image from 'next/image';

export default function Tours() {

   const openModal = () => {
    window.dispatchEvent(new Event('openModal'));
  };

  const tours = [
    { day: '05', title: 'Athens sightseeing tour' },
    { day: '09', title: 'Transfer to the port' },
    { day: '14', title: 'Boat trip and island visit' },
    { day: '19', title: 'Cape Sounion and Temple of Poseidon' },
    { day: '22', title: 'Monastery of Saint Luke' },
    { day: '26', title: 'Ancient Corinth and Nafplio' },
    { day: '29', title: 'Greek culture and local traditions' },
  ];

  return (
    <section className={styles.tours}>
      <Container>

        <div className={styles.title}>
          <h2 className={styles.heading}>
            <span className={styles.small}>unforgettable</span>
            <span className={styles.big}>GREECE</span>
          </h2>

          <p className={styles.title_text}>
            Join our upcoming tours and experience the best of Greece — from ancient cities to seaside escapes.
          </p>

          <button className={styles.btn} onClick={openModal}>
            Book now
            <Image src="/icons/arrow-white.svg" alt="" width={46} height={10}/>
          </button>
        </div>

        <div className={styles.upcoming}>
          <h3 className={styles.subtitle}>
            Upcoming<br />tours:
          </h3>

          <div className={styles.list}>
            {tours.map((tour, index) => (
              <div key={index} className={styles.item}>
                <span className={styles.day}>{tour.day}</span>

                <div className={styles.info}>
                  <span className={styles.month}>September</span>
                  <p className={styles.name}>{tour.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.follow}>
          <p className={styles.follow_text}>
            Follow us on Instagram for more travel inspiration.
          </p>

          <button
            className={styles.follow_btn}
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <Image src="/icons/arrow-white.svg" alt="" width={46} height={10}/>
          </button>
        </div>

      </Container>
    </section>
  );
}