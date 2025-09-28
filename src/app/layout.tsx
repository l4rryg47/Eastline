import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/layout/Header'), { ssr: true });
const Footer = dynamic(() => import('../components/layout/Footer'), { ssr: true });

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0369a1',
};

export const metadata: Metadata = {
  title: 'Eastline Shippers - Global Oil & Gas Logistics',
  description: 'Leading provider of comprehensive oil and gas shipping and logistics solutions worldwide.',
  keywords: 'oil shipping, gas logistics, petroleum transport, energy logistics, shipping company',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-white text-gray-800`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
