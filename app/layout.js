import { Lora, Inter } from "next/font/google";
import "./globals.css";

const display = Lora({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"Positive Crave — Konsep Lumen","description":"Landing page brand keintiman","url":"https://crave-lumen.pintuweb.com"};

export const metadata = {
  metadataBase: new URL("https://crave-lumen.pintuweb.com"),
  title: "Positive Crave — Konsep Lumen",
  description: "Landing page Positive Crave konsep \"Lumen\": keintiman dimulai dari cahaya — edukasi, rasa hormat, dan rasa aman.",
  applicationName: "Positive Crave",
  keywords: ["intimacy brand", "wellness pasangan", "landing page terang", "desain web"],
  authors: [{ name: "Positive Crave" }],
  creator: "Positive Crave",
  publisher: "Positive Crave",
  alternates: { canonical: "https://crave-lumen.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://crave-lumen.pintuweb.com",
    siteName: "Positive Crave",
    title: "Positive Crave — Konsep Lumen",
    description: "Landing page Positive Crave konsep \"Lumen\": keintiman dimulai dari cahaya — edukasi, rasa hormat, dan rasa aman.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Positive Crave — Konsep Lumen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Positive Crave — Konsep Lumen",
    description: "Landing page Positive Crave konsep \"Lumen\": keintiman dimulai dari cahaya — edukasi, rasa hormat, dan rasa aman.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
