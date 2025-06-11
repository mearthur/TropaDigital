import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const geistSans = Roboto({
  subsets: ['latin'],
  display: 'auto',
});

export const metadata: Metadata = {
  title: 'Tropa Digital',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
