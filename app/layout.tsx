import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontInter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = FontInter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieBox",
  description: "Watch Your Favourite Movies and Series",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
