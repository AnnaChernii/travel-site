'use client';

import { useState } from 'react';
import React from 'react';
import styles from './Footer.module.css';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {

  const [showToast, setShowToast] = useState(false);

  const handleSocialClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <footer className={styles.footer}>
      <Container>
        
          <div className={styles.container}>
            
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={122}
                  height={65}
                />
              </Link>
              <p>
                Unique tours and authentic travel experiences across Greece
              </p>
            </div>

            {/* Transfers */}
            <div className={styles.column}>
              <h3>
                <Link href="/transfers">Transfers</Link>
              </h3>
              <ul>
                <li>S-Class</li>
                <li>Sprinter</li>
                <li>V-Class</li>
                <li>Bus</li>
              </ul>
            </div>

            {/* Contacts */}
            <div className={styles.column}>
              <h3>
                <Link href="/contacts">Contacts</Link>
              </h3>
              <ul>
                <li>Kyiv, Ukraine</li>
                <li>+38 097 777 66 55</li>
                <li>good@travel.com</li>
              </ul>
            </div>

            {/* Blog */}
            <div className={styles.column}>
              <h3>
                <Link href="/blog">Blog</Link>
              </h3>
              <ul>
                <li>All posts</li>
              </ul>
            </div>

          </div>

          {/* Socials */}
          <div className={styles.socials}>
            <button onClick={handleSocialClick}>
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </button>
            <button onClick={handleSocialClick}>
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* Bottom */}
          <div className={styles.bottom}>
            © 2026 Your Brand. All rights reserved.
          </div>
        

        {/* Toast */}
        {showToast && (
          <div className={styles.toast}>
            Coming soon — social media is under development
          </div>
        )}
      </Container>
    </footer>
  )
}
