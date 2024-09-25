import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'GabMenezesDev',
  description: 'developer portfolio Gabriel Menezes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className='p-0 m-0 size-full bg-gradient'>
      <head>
        <link rel="icon" href="/static/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
          size-full m-0 p-0 bg-repeat heropattern-circuitboard-inherit`}
      >
        {children}
      </body>
    </html>
  );
}
