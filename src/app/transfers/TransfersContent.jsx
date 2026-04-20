'use client';

import styles from './Transfers.module.css';
import Image from 'next/image';

export default function TransfersContent() {
  const openModal = () => {
    window.dispatchEvent(new Event('openModal'));
  };

  return (
    <div className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Private Transfers in Greece</h1>

        <p>
          Discover Greece in comfort, privacy, and style. Our private transfer service
          is designed for travelers who value time, safety, and a smooth journey
          between the most beautiful destinations in the country.
        </p>

        <p>
          Whether you are arriving at the airport, moving between islands,
          or exploring coastal cities, we provide reliable transport solutions
          tailored to your itinerary. Every journey is planned with attention
          to detail so you can simply relax and enjoy the views.
        </p>

        <button className={styles.btn} onClick={openModal}>
            Book now
            <Image src="/icons/arrow-black.svg" alt="" width={46} height={10}/>
        </button>
      </section>

      {/* BENEFITS */}
      <section className={styles.section}>
        <h2>Why choose our transfers</h2>

        <div className={styles.textBlock}>
          <p>
            Traveling in Greece can be unpredictable if you rely on public transport
            or random taxi services. Our private transfers eliminate uncertainty.
            You know exactly who is picking you up, when, and in what comfort level.
          </p>

          <p>
            We focus on punctuality, professional drivers, and clean, modern vehicles.
            Every transfer is pre-arranged and optimized for your route, ensuring
            a stress-free experience from the moment you arrive.
          </p>

          <p>
            From solo travelers to large groups, we adapt to your needs and provide
            flexible options for any type of journey.
          </p>
        </div>
      </section>

      {/* FLEET */}
      <section className={styles.section}>
        <h2>Our fleet</h2>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>S-Class</h3>
            <p>
              A premium executive car for those who appreciate privacy and elegance.
              Ideal for business trips, VIP transfers, or romantic getaways.
            </p>
            <p>
              Smooth ride, leather interior, and a calm atmosphere make it the
              most comfortable way to travel short and medium distances.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Sprinter</h3>
            <p>
              Perfect choice for groups and families who want to travel together.
              Spacious interior allows for luggage and comfort at the same time.
            </p>
            <p>
              Often used for island tours, excursions, and multi-stop routes
              across Greece.
            </p>
          </div>

          <div className={styles.card}>
            <h3>V-Class</h3>
            <p>
              A balance between luxury and practicality. Designed for small groups
              who want extra space without losing comfort.
            </p>
            <p>
              Ideal for airport transfers, hotel routes, and longer scenic drives.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Bus</h3>
            <p>
              Large-capacity transport for events, corporate travel, and group tours.
            </p>
            <p>
              Comfortable seating and efficient organization make it suitable for
              organized travel across multiple destinations.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to travel Greece comfortably?</h2>

        <p>
          Plan your route, choose your vehicle, and let us take care of the rest.
          Your journey begins with a simple booking.
        </p>

        <button className={styles.btn} onClick={openModal}>
            Book now
            <Image src="/icons/arrow-black.svg" alt="" width={46} height={10}/>
        </button>
      </section>

    </div>
  );
}