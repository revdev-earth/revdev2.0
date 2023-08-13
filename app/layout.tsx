import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rev Dev 2.0",
  description: "Logra lo que deseas, Esta a unos pasos, Hagamos que suceda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />

        <main className="min-h-[100vh] overflow-hidden">{} </main>

        <Footer />
      </body>
    </html>
  );
}
