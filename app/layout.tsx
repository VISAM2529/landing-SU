import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ScoreUp - MCQ Based Exam Preparation for MHT-CET, JEE & NEET',
  description: 'Ace your competitive exams with 10,000+ MCQs, mock tests, and performance analytics. Comprehensive preparation for MHT-CET, JEE Main, JEE Advanced, and NEET exams.',
  keywords: 'MHT-CET, JEE, NEET, exam preparation, MCQ, mock tests, competitive exams, study app, ScoreUp',
  authors: [{ name: 'ScoreUp' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'ScoreUp - MCQ Based Exam Preparation',
    description: 'Comprehensive exam preparation app for MHT-CET, JEE, and NEET with 10,000+ MCQs',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'ScoreUp Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'ScoreUp - MCQ Based Exam Preparation',
    description: 'Comprehensive exam preparation app for MHT-CET, JEE, and NEET with 10,000+ MCQs',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}