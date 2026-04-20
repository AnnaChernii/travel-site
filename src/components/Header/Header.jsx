'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Image from 'next/image';
import Container from '../Container/Container';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const handleClose = () => setIsOpen(false);

  const isBlogList = pathname === '/blog';

  const isDark =
    isBlogList ||
    pathname.startsWith('/transfers') ||
    pathname.startsWith('/contacts');

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <Container>
        <div className={styles.inner}>
          
          {/* LOGO */}
          <Link href="/" className={styles.logo} onClick={handleClose}>
            <Image src="/logo.svg" alt="Logo" width={120} height={40} />
          </Link>

          {/* DESKTOP NAV */}
          <nav className={styles.nav}>
            <Link href="/blog">Blog</Link>
            <Link href="/transfers">Transfers</Link>
            <Link href="/contacts">Contacts</Link>
          </nav>

          {/* LANGUAGE */}
          <div className={styles.language}>
            <LanguageSwitcher />
          </div>

          {/* BURGER */}
          <button
            className={`${styles.burger} ${isOpen ? styles.active : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </Container>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/transfers" onClick={handleClose}>Transfers</Link>
          <Link href="/blog" onClick={handleClose}>Blog</Link>
          <Link href="/contacts" onClick={handleClose}>Contacts</Link>
        </nav>
      </div>

    </header>
  );
}