import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hills of Glory - Mabalacat',
  description: 'A welcoming church website and MIS dashboard for Hills of Glory.',
  icons: {
    icon: "/hog_logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
