"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/icons/LogoCalmora.svg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const router = useRouter();

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

  const handleLogout = () => {
    document.cookie = "next-auth.session-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "userId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    signOut({ callbackUrl: "/login" });
    router.push("/login");
  };

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white shadow-md">
      <Link href={"/"} className="flex items-center">
        <Image src={Logo} width={0} height={0} alt="Logo" className="w-[165px] h-[30px] translate-x-5" />
      </Link>
      <ul className="flex items-center space-x-6 relative">
        <li className="relative">
          <button
            onClick={toggleServices}
            className="flex items-center text-black font-semibold hover:text-lightPink transition"
          >
            Services
            <ChevronDownIcon className="w-4 h-3 ml-1" />
          </button>
          {servicesOpen && (
            <ul
              ref={servicesRef}
              className="absolute right-0 mt-2 bg-[#EAEAEA] border border-gray-300 rounded-md shadow-lg z-10"
              style={{ width: "900px", height: "100px", padding: "1px" }}
            >
              <div className="grid grid-cols-3 gap-x-[-20px] p-2">
                <li className="pl-1 pr-1">
                  <Link href="/quiz" className="block text-black font-semibold hover:bg-gray-100 p-1 rounded-md text-left">
                    Quiz
                  </Link>
                </li>
                <li className="pl-1 pr-1">
                  <Link href="/article" className="block text-black font-semibold hover:bg-gray-100 p-1 rounded-md text-left">
                    Article
                  </Link>
                </li>
                <li className="pl-1 pr-1">
                  <Link href="/council1" className="block text-black font-semibold hover:bg-gray-100 p-1 rounded-md text-left">
                    Council
                  </Link>
                </li>
                <li className="pl-1 pr-1">
                  <Link href="/chatbot" className="block text-black font-semibold hover:bg-gray-100 p-1 rounded-md text-left">
                    Chatbot
                  </Link>
                </li>
              </div>
            </ul>
          )}
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link href="/profile" className="text-black font-semibold hover:text-lightPink transition">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-black font-semibold hover:text-lightPink transition"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login" className="text-black font-semibold hover:text-lightPink transition">
                Log in
              </Link>
            </li>
            <li>
              <Link href="/register" className="border-2 border-lightPink text-lightPink bg-transparent px-4 py-2 rounded-full font-bold hover:bg-lightPink hover:text-white transition">
                Get Started
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
