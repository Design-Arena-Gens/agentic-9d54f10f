import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Android Studio Cloud',
  description: 'Spin up Android development in your browser?no installs required.',
  metadataBase: new URL('https://agentic-9d54f10f.vercel.app')
};

export const viewport: Viewport = {
  themeColor: '#0ea5e9',
  colorScheme: 'dark light'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
