import '@/styles/reset.css'
import { Familjen_Grotesk } from 'next/font/google'

const familjenGrotesk = Familjen_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-familjen-grotesk',
  weight: ['400', '500', '700']
});

const layoutStyles = {
  fontFamily: 'var(--font-familjen-grotesk)',
};

export const metadata = {
  title: "Trawler",
  description: "Empowering the Next Generation of Fintech Startups with Enriched Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={familjenGrotesk.variable} style={layoutStyles}>
        {children}
      </body>
    </html>
  );
}