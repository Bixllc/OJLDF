import "../styles/globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: 'OJLDF | One Jamaica Legal Defense Foundation',
  description:
    'Committed to protecting justice and equality for everyone — especially individuals who have been wrongfully accused, marginalized, or deprived of fair legal representation.',
  metadataBase: new URL('https://ojldf.net'),
  openGraph: {
    title: 'OJLDF | One Jamaica Legal Defense Foundation',
    description:
      'Fighting for justice and equality for all. Donate, volunteer, or spread awareness today.',
    siteName: 'One Jamaica Legal Defense Foundation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OJLDF | One Jamaica Legal Defense Foundation',
    description:
      'Fighting for justice and equality for all. Donate, volunteer, or spread awareness today.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-[var(--font-dm-sans)]">{children}</body>
    </html>
  )
}
