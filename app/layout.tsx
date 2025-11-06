import "./globals.css";
import { Inter as FontInter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = FontInter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: "MovieBox",
  description: "Discover and stream your favorite movies",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
