import "./globals.css";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Modal from '@/components/Modal/Modal';

import { Roboto, Playfair_Display } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700'],
  variable: '--font-roboto'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-playfair'
});

export const metadata = {
  title: "Greece Travel",
  description: "Tours and transfers in Greece",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${playfair.variable}`}>
        <Header />
        <ScrollToTop />
        <Modal />
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}