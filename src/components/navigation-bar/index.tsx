"use client";
import React, {useState, useRef, useEffect} from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Navbar: React.FC = () => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const servicesRef = useRef<HTMLUListElement>(null);
  
    const toggleServices = () => {
      setServicesOpen((prev) => !prev);
    };
  
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
    }
};
useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white shadow-md">
    <Link href="/" className="flex items-center">
        <Image src ="images/LogoCalmora.svg" width={256} height={60} alt="Calmora Logo" className="h-8 mr-2"/> 
    </Link>
    <ul className="flex items-center space-x-6 relative">
        <li className="relative">
        <button
        onClick={toggleServices}
        className="flex items-center text-black hover:text-lightPink transition"
        >
        Services
        <ChevronDownIcon className="w-4 h-3 ml-1" />
        </button>
        {servicesOpen && (
        <ul
        ref={servicesRef}
        className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10" // Ubah right-20 menjadi right-0, hapus inset-x-[-900px]
        style={{ width: "900px", height: "100px", padding: "1px" }}
        >
        <div className="grid grid-cols-3 gap-x-[-20px] p-2">
        <li className="pl-1 pr-1">
                <Link
                href="/quiz"
                className="block text-black hover:bg-gray-100 p-1 rounded-md text-left"
                onClick={() => setServicesOpen(false)}
                >
                  Quiz
                </Link>
              </li>
              <li className="pl-1 pr-1">
                <Link
                  href="/article"
                  className="block text-black hover:bg-gray-100 p-1 rounded-md text-left"
                  onClick={() => setServicesOpen(false)}
                >
                  Article
                </Link>
              </li>
              <li className="pl-1 pr-1">
                <Link
                  href="/mood-tracker"
                  className="block text-black hover:bg-gray-100 p-1 rounded-md text-left"
                  onClick={() => setServicesOpen(false)}
                >
                  Mood Tracker
                </Link>
              </li>
              <li className="pl-1 pr-1">
                <Link
                  href="/council1"
                  className="block text-black hover:bg-gray-100 p-1 rounded-md text-left"
                  onClick={() => setServicesOpen(false)}
                >
                  Council
                </Link>
              </li>
              <li className="pl-1 pr-1">
                <Link
                  href="/council2"
                  className="block text-black hover:bg-gray-100 p-1 rounded-md text-left"
                  onClick={() => setServicesOpen(false)}
                >
                  Council
                </Link>
              </li>
            </div>
          </ul>
          )}
        </li>

        <li>
          <Link href="/about" className="text-black hover:text-lightPink transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-black hover:text-lightPink transition">
            Log in
          </Link>
        </li>
        <li>
          <Link
            href="/get-started"
            className="border-2 border-lightPink text-lightPink bg-transparent px-4 py-2 rounded-full font-bold hover:bg-lightPink hover:text-white transition"
          >
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;