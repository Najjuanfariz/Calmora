"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/icons/LogoCalmora.svg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import UniversalCookie from "universal-cookie";
import { signOut } from "next-auth/react";

const Navbar: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLUListElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cookies = new UniversalCookie();

  useEffect(() => {
    const sessionToken = cookies.get("next-auth.session-token");

    const userId = cookies.get("userId");
    if (userId || sessionToken) {
      setIsLoggedIn(false); 
    } else {
      setIsLoggedIn(true); 
    }
  }, [cookies]);

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
    // cookies.remove("next-auth.session-token", { path: "/" });
    signOut({callbackUrl: "/login"})
    cookies.remove("userId", { path: "/" });
    cookies.remove("username", { path: '/' });  
    setIsLoggedIn(false); // Set status logout
    router.push("/login")
  };

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white shadow-md">
      <Link href={"/"} className="flex items-center">
        <Image src={Logo} width={256} height={60} alt="Logo" className="h-8 mr-2" />
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
                  <Link
                    href="/quiz"
                    className="block text-black font-semibold hover:bg-gray-100 p-1 rounded-md text-left"
                    onClick={() => setServicesOpen(false)}
                  >
                    Quiz
                  </Link>
                </li>
                <li className="pl-1 pr-1">
                  <Link
                    href="/article"
                    className="block text-black font-semibold hover:bg-gray-100 p-1 rounded-md text-left"
                    onClick={() => setServicesOpen(false)}
                  >
                    Article
                  </Link>
                </li>
                <li className="pl-1 pr-1">
                  <Link
                    href="/council1"
                    className="block text-black font-semibold hover:bg-gray-100 p-1 rounded-md text-left"
                    onClick={() => setServicesOpen(false)}
                  >
                    Council
                  </Link>
                </li>
                <li className="pl-1 pr-1">
                  <Link
                    href="/chatbot"
                    className="block text-black font-semibold hover:bg-gray-100 p-1 rounded-md text-left"
                    onClick={() => setServicesOpen(false)}
                  >
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
