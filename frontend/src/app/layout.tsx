import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('../components/navigation-bar'), { ssr: false })
const Footer = dynamic(() => import('../components/footer'), { ssr: false })

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
        <Footer />
      </body>
    </html>
  );
}
