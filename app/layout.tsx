import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FertClub | Dra. Fernanda Tofoli",
  description:
    "Um grupo de estudos clínicos conduzido pela Dra. Fernanda Tofoli. Aprenda a conduzir os casos de infertilidade mais desafiadores com a Fertilidade Funcional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
