"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/icons/LogoFooter.svg";
import instagram from "@/assets/icons/instagram.svg";
import twitter from "@/assets/icons/twitter.svg";
import facebook from "@/assets/icons/facebook.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lightPink py-6 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left section with logo and description */}
          <div className="flex flex-col items-start">
            <Image src={Logo} width={100} height={60} alt="Calmora Logo" className="mb-4" />
            <p className="text-lg">
              Calmora, ruang tenang untuk kesehatan mental Anda. Dengan fitur terbaik, kami hadir untuk mendukung Anda menemukan keseimbangan dan ketenangan.
            </p>
          </div>

          {/* Right section with Contact and Social Media Links */}
          <div className="flex space-x-12">
            {/* Contact Us */}
            <div>
              <h3 className="font-semibold text-lg">Contact Us</h3>
              <p>
                <Link href="mailto:Calmora@gmail.com" className="text-white hover:underline">Calmora@gmail.com</Link>
              </p>
              <p>Jl. Cipayung mabes hankam</p>
              <p>+62 8123103147</p>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-semibold text-lg mb-5">Follow Us</h3>
              <div className="flex space-x-4 ">
                {/* Instagram link with logo */}
                <div className="flex">
                <Link href="https://instagram.com">
                  <Image src={instagram} width={80} height={40} alt="Instagram" className="" />
                </Link>
                </div>
                <div className="flex">
                {/* Twitter link with logo */}
                <Link href="https://twitter.com">
                  <Image src={twitter} width={80} height={40} alt="Twitter" className="" />
                </Link>
                </div>
                <div className="flex">
                {/* Facebook link with logo */}
                <Link href="https://facebook.com">
                  <Image src={facebook} width={80} height={40} alt="Facebook" className="" />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white mt-6 pt-4 text-center text-sm">
          <p>© 2024 Calmora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
