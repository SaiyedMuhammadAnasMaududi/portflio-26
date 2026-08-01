import type { Metadata } from 'next';
import { Montserrat, Inter, Fira_Code } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Syed Muhammad Anas Maududi | Full-Stack & AI-Native Developer',
  description:
    'Portfolio of Syed Muhammad Anas Maududi — Full-Stack & AI-Native Developer with 5 years experience building React, Next.js, Node.js, AI Employees, and Cloud-Native agentic systems.',
  keywords: [
    'Syed Muhammad Anas Maududi',
    'Full-Stack Developer',
    'AI Developer',
    'Next.js',
    'React',
    'TypeScript',
    'OpenAI Agent SDK',
    'AI Employees',
    'RAG',
    'Docker',
    'Kubernetes',
    'Supabase',
  ],
  authors: [{ name: 'Syed Muhammad Anas Maududi' }],
  openGraph: {
    title: 'Syed Muhammad Anas Maududi | Full-Stack & AI-Native Developer',
    description:
      '5 years of experience building modern web apps, autonomous AI Employees, and cloud-native solutions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} ${firaCode.variable} font-sans min-h-screen bg-[#020202] text-white selection:bg-[#00ff66] selection:text-black antialiased transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
