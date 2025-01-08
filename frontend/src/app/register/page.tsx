"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Calmora from '@/assets/icons/Calmora.svg';
import TCalmora from '@/assets/icons/TCalmora.svg';
import LogoGoggle from '@/assets/icons/LogoGoggle.svg';
import Link from 'next/link';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/api/v1/register", {
        username,
        email,
        password,
      });

      if (response.data.msg === "Pendaftaran berhasil") {
        setSuccess(response.data.msg);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError("Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
    }
  };

  const handleGoogleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn("google", {
        redirect: false,
        callbackUrl: "/",
      });
      if (result?.ok) {
        console.log("Google register success", result);
        router.push("/");
      }
    } catch (error) {
      console.error("Google Register Error:", error);
      setError("Gagal mendaftar dengan Google. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex h-screen w-auto items-center justify-center bg-darkPink">
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}
      <div className="flex w-[1250px] h-[630px] bg-cyan overflow-hidden shadow-lg">
        <div className="w-2/5 bg-aliPink flex flex-col items-center justify-center">
          <Image src={Calmora} alt="Calmora" width={0} height={0} sizes="100%" className="mb-20 w-full max-w-[120px] h-fit" />
          <Image src={TCalmora} alt="TextCalmora" width={0} height={0} sizes="100%" className="w-full max-w-[200px] h-fit" />
        </div>
        <div className="relative w-1/2 flex flex-col items-center justify-center px-10">
          <div className="absolute top-[40px] right-[-40px] flex items-center space-x-12 mb-4">
            <p className="text-sm font-semibold text-[#444444]">Already have an account?</p>
            <Link href="/login" className="text-lightPink font-semibold border-2 border-lightPink rounded-md px-4 py-1 hover:bg-lightPink hover:text-white">
              Sign in
            </Link>
          </div>
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-extrabold mb-4">Welcome to Calmora</h2>
            <p className="text-[#444444] font-semibold mb-6">Register your account</p>
            <form className="space-y-4 items-center" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium">Username</label>
                <input
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  className="w-full bg-cyan border-2 border-[#929292] rounded-lg p-2.5 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full bg-cyan border-2 border-[#929292] rounded-lg p-2.5 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full bg-cyan border-2 border-[#929292] rounded-lg p-2.5 focus:outline-none focus:border-pink-500"
                />
              </div>
              <button type="submit" className="w-40 bg-lightPink text-white font-semibold rounded-lg p-2.5 mt-15">
                Register
              </button>
            </form>
            <button onClick={handleGoogleRegister} className="flex mt-8 items-center space-x-14">
              <span className="text-[#444444]">Create account with</span>
              <Image src={LogoGoggle} alt="LogoGoogle" width={0} height={0} sizes="100%" className="max-w-[40px] w-fit"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
