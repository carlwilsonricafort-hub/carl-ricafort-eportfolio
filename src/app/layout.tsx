import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carl Wilson U. Ricafort | E-Portfolio",
  description:
    "E-portfolio of Carl Wilson U. Ricafort, a fourth-year BS IT student seeking Web Developer and QA Intern OJT opportunities in Dumaguete City.",
  icons: { icon: "/profile_32x32.ico" },
  openGraph: {
    title: "Carl Wilson U. Ricafort | E-Portfolio",
    description:
      "E-portfolio of Carl Wilson U. Ricafort, a fourth-year BS IT student seeking Web Developer and QA Intern OJT opportunities in Dumaguete City.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
