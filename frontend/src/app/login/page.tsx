"use client"
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import UniversalCookie from 'universal-cookie';
import Calmora from '@/assets/icons/Calmora.svg';
import TCalmora from '@/assets/icons/TCalmora.svg';
import LogoGoggle from '@/assets/icons/LogoGoggle.svg';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const cookies = new UniversalCookie();

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!email || !password) {
            alert("Email dan password salah");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/v1/login", {
                email,
                password
            });

            const userData = response.data.user
            if(userData && userData._id){
                cookies.set('userId', userData._id, { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) })
                cookies.set('username', userData.username, { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
                setSuccess(response.data?.msg);
                router.push("/")
            }else{
                throw new Error("Data Pengguna Tidak Valid");
            }
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                console.log("Error response:", err.response.data);
                setError(err.response.data?.msg || "Login gagal");
            } else {
                console.log("Error:", err);
                setError("Terjadi kesalahan");
            }
        }
    };

    const handleSignLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await signIn("google",{
                redirect: false,
                callbackUrl:"/"
            })    
            if(result?.ok){
                console.log("Google login success", result)
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="flex h-screen w-auto items-center justify-center bg-darkPink">
            <div className="flex w-[1250px] h-[630px] bg-cyan overflow-hidden shadow-lg">
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <div className="w-2/5 bg-aliPink flex flex-col items-center justify-center">
                    <Image src={Calmora} 
                        alt="Calmora" 
                        width={120} 
                        height={300} 
                        className='mb-20' />
                    <Image src={TCalmora} 
                        alt='TextCalmora' 
                        width={200} 
                        height={300} />
                </div>
                <div className="relative w-1/2 flex flex-col items-center justify-center px-10">
                    <div className="absolute top-[40px] right-[-40px] flex items-center space-x-12 mb-4">
                        <p className="text-sm font-semibold text-[#444444]">Don&apos;t have account?</p>
                        <Link href="/register" 
                            className="text-lightPink font-semibold border-2 border-lightPink rounded-md px-4 py-1 hover:bg-lightPink hover:text-white">
                            Sign Up
                        </Link>
                    </div>
                    <div className="w-full max-w-md">
                        <h2 className="text-[40px] font-extrabold mb-4">Welcome to Calmora</h2>
                        <p className="text-[#444444] font-semibold mb-6">Sign in your account</p>
                        <form className="space-y-4 items-center " onSubmit={handleSubmit}>
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
                            <button type="submit" className="w-40 bg-lightPink text-white font-semibold rounded-lg p-2.5 mt-15">Login</button>
                        </form>
                        <button onClick={handleSignLogin} className="flex mt-8 items-center space-x-32">
                            <span className="text-[#444444]">Sign in with</span>
                            <Image src={LogoGoggle} 
                                alt="LogoGoogle" 
                                width={40} 
                                height={40}
                            ></Image>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
