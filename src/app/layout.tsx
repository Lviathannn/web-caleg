import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Azizah Mukarromah - Calon Anggota DPRD Kabupaten Ciamis',
  description: 'Azizah Mukarromah - Calon Anggota DPRD Kabupaten Ciamis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
