import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation-bar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "800"],
})
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
      </body>
    </html>
  );
}

