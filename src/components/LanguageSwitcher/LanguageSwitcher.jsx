'use client';

import styles from './LanguageSwitcher.module.css';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const isBlogList = pathname === '/blog';

  const isDark =
    isBlogList ||
    pathname.startsWith('/transfers') ||
    pathname.startsWith('/contacts');

  const changeLang = (lang) => {
    localStorage.setItem('lang', lang);
    window.location.reload();
  };

  return (
    <div className={`${styles.switcher} ${isDark ? styles.dark : styles.light}`}>
      <button onClick={() => changeLang('en')}>EN</button>
      <span> | </span>
      <button onClick={() => changeLang('de')}>DE</button>
    </div>
  );
}