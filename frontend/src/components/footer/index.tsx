"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/assets/icons/LogoFooter.svg";
import instagram from "@/assets/icons/instagram.svg";
import twitter from "@/assets/icons/twitter.svg";
import facebook from "@/assets/icons/facebook.svg";

const Footer: React.FC = () => {
  
const pathname = usePathname();

if (pathname === "/login" || pathname === "/register" || pathname === "/chatbot") {
  return null;
}
  return (
    <footer className="bg-white py-6 text-lightPink">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left section with logo and description */}
          <div className="flex flex-col items-start">
            <Image src={Logo} width={190} height={60} alt="Calmora Logo" className="mb-8" />
            <p className="text-[15px] font-semibold">
              Calmora, ruang tenang untuk kesehatan mental Anda. Dengan <br/>fitur terbaik, kami hadir untuk mendukung Anda menemukan <br/>keseimbangan dan ketenangan.
            </p>
          </div>

            <div>
              <h3 className="font-bold text-[20px] mb-8">Contact Us</h3>
              <p>
                <Link href="mailto:Calmora@gmail.com" className="text-lightPink hover:underline">Calmora@gmail.com</Link>
              <p>Jl. Cipayung mabes hankam</p>
              <p>+62 8123103147</p>
              </p>
            </div>
          <div className="flex -translate-x-16  ">
            <div>
              <h3 className="font-bold -translate-y-6 text-[20px] mb-5">Follow Us</h3>
              <div className="flex space-x-4 ">
                <div className="flex">
                <Link href="https://instagram.com">
                  <Image src={instagram} width={40} height={40} alt="Instagram" className="" />
                </Link>
                </div>
                <div className="flex">
                <Link href="https://twitter.com">
                  <Image src={twitter} width={40} height={40} alt="Twitter" className="" />
                </Link>
                </div>
                <div className="flex">
                <Link href="https://facebook.com">
                  <Image src={facebook} width={40} height={40} alt="Facebook" className="" />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t-2 border-lightPink mt-6 pt-4 text-center text-sm">
          <p>© 2024 Calmora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
