import { Lora, Inter } from "next/font/google";
import "./globals.css";

const display = Lora({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Positive Crave — Konsep Lumen",
  description: "Positive Crave: keintiman dimulai dari cahaya — edukasi, rasa hormat, dan rasa aman.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
