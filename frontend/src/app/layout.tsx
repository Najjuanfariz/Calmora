import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation-bar";
import Footer from "@/components/footer"; // Import Footer component

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Calmora",
  description: "Calmora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        <div className="w-full max-w-[1920px] mx-auto">
          <main>{children}</main>
        </div>
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}
