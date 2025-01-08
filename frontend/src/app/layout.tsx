import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import NavbarWrapper from "@/components/NavbarWrapper";

const Footer = dynamic(() => import("../components/footer"), { ssr: false });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Calmora",
  description: "Calmora - A mental health platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50 text-gray-900`}>
        {/* NavbarWrapper di Server Component */}
        <NavbarWrapper />

        {/* Kontainer utama */}
        <div className="w-full max-w-[1920px] mx-auto">
          <main>{children}</main>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

