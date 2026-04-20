'use client';

import React, { useState } from 'react';
import styles from './Promo.module.css';
import Container from '@/components/Container/Container';
import Image from 'next/image';

export default function Promo() {
  const [play, setPlay] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={styles.promo}>
      <Container>
        <div className={styles.promoContent}>
          
          <h2 className={styles.title}>
            Choose your unforgettable journey
          </h2>

          {/* TOP SECTION */}
          <div className={styles.topSection}>
            
            <div className={styles.map}>
              <Image 
                src="/images/bg/img-promo.svg" 
                alt="route"
                width={540} 
                height={480}
              />
            </div>

            <div className={styles.textBlock}>
              <p>
                A one-day cruise to the three islands of the Saronic Gulf — Hydra, Poros, and Aegina — is a perfect choice for those who want to feel like true travelers, not just tourists. Fortunately, you won’t have to battle cyclopes, and the enchanting voices of sirens luring sailors are unlikely to be heard. However, you will discover plenty of fascinating history and ancient beauty along the way.
              </p>

              <h4>Aegina</h4>

              <p>
                Our first stop is Aegina, an island with a rich and ancient history. Many centuries ago, it was one of the most powerful and influential islands in Greece - almost a state within a state. It thrived on trade and even minted its own currency. Over time, however, Aegina became one of many picturesque Greek islands, each with its own unique charm.
              </p>



               {expanded && (
                  <div className={styles.extraText}>
                    <p>
                      Beyond its historical significance, Aegina is known for its charming harbor lined with neoclassical buildings and vibrant seaside cafés.
                    </p>
                    <p>
                      The island is especially famous for its pistachios, considered among the finest in the world, and visitors often enjoy tasting local delicacies.
                    </p>
                    <p>
                      As you explore further, you’ll encounter ancient temples such as the Temple of Aphaia, offering breathtaking panoramic views.
                    </p>
                    <p>
                      The relaxed pace of life here makes it an ideal escape from the bustle of Athens, even if just for a single day.
                    </p>
                    <p>
                      Each stop on this journey reveals a different side of Greek island culture, blending mythology, history, and everyday beauty.
                    </p>
                  </div>
                )}
              <button 
                className={styles.btn}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Show less' : 'Learn more'}
                <Image 
                  src="/icons/arrow-black.svg" 
                  alt=""
                  width={46}
                  height={10}
                />
              </button>

          
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className={styles.bottomSection}>
            
            {/* Guides */}
            <div className={styles.guides}>
              <h3 className={styles.guidesTitle}>Guides</h3>

              <div className={styles.guideItem}>
                <Image 
                  src="/images/authors/elizabeth_hayes.jpg" 
                  alt="guide"
                  width={110}
                  height={110}
                />
                <div>
                  <p>Elizabeth Hayes</p>
                  <span>Guide</span>
                </div>
              </div>

              <div className={styles.guideItem}>
                <Image 
                  src="/images/authors/alexander_pierce.jpg" 
                  alt="photographer"
                  width={110}
                  height={110}
                />
                <div>
                  <p>Alexander Pierce</p>
                  <span>Photographer</span>
                </div>
              </div>
            </div>

            {/* VIDEO */}
            <div className={styles.videoWrapper}>
              
              {!play ? (
                <div 
                  className={styles.preview}
                  onClick={() => setPlay(true)}
                >
                  <Image
                    src="/images/bg/video-preview.jpg"
                    alt="video preview"
                    fill
                    className={styles.previewImg}
                  />

                  <button className={styles.playBtn}>▶</button>

                  <div className={styles.videoText}>
                    <p>Review your journey</p>
                    <span>Watch the video</span>
                  </div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/JXXvmDxt2h0?autoplay=1"
                  title="YouTube video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}