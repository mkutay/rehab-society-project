import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';

import '@/app/globals.css';
import NavBar from '@/components/navBar';
import Footer from '@/components/footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Rehab Society?',
  description: 'This is the amazing game that the Rehab Society (the name is in working progess) is working on',
  generator: 'Next.js',
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} text-foreground bg-background`}>
        <ThemeProvider attribute="class">
          <main className="flex flex-col min-h-screen">
            <NavBar/>
            <div className="flex-1">{children}</div>
            <Footer/>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}