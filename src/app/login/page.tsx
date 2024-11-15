import Image from 'next/image'
import React from 'react'
import Calmora from '@/assets/icons/Calmora.svg'
import TCalmora from '@/assets/icons/TCalmora.svg'
import LogoGoggle from '@/assets/icons/LogoGoggle.svg'
import Link from 'next/link'

export default function Login() {
return (
    <div className="flex h-screen w-auto items-center justify-center bg-darkPink">
        <div className="flex w-[1250px] h-[630px] bg-cyan overflow-hidden shadow-lg">
            {/* Bagian Kiri */}
            <div className="w-2/5 bg-aliPink flex flex-col items-center justify-center">
                <Image src={Calmora} 
                alt="Calmora" 
                width={120} 
                height={300} 
                className='mb-20'></Image>
                <Image src={TCalmora} 
                alt='TextCalmora' 
                width={200} 
                height={300}></Image>
            </div>
            {/* Bagian Kanan */}
            <div className="relative w-1/2 flex flex-col items-center justify-center px-10">
            <div className="absolute top-[40px] right-[-40px] flex items-center space-x-12 mb-4">
                <p className="text-sm font-semibold text-[#444444]">Don&apos;t have account?</p>
                <Link href="/register" 
                className=" text-lightPink font-semibold border-2  border-lightPink rounded-md px-4 py-1 hover:bg-lightPink hover:text-white">
                    Sign Up
                </Link>
            </div>
                <div className="w-full max-w-md">
                    <h2 className="text-4xl font-extrabold mb-4">Welcome to Calmora</h2>
                    <p className="text-[#444444] font-semibold mb-6">Register your account</p>
                    <form className="space-y-4 items-center ">
                        <div>
                            <label className="block text-sm font-normal">Nama</label>
                            <input type="text" className="w-full bg-cyan border-2 border-[#929292] rounded-lg p-2.5 focus:outline-none focus:border-pink-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-normal">Email</label>
                            <input type="email" className="w-full bg-cyan border-2 border-[#929292] rounded-lg p-2.5 focus:outline-none focus:border-pink-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-normal">Password</label>
                            <input type="password" className="w-full bg-cyan border-2 border-[#929292] rounded-lg p-2.5 focus:outline-none focus:border-pink-500" />
                        </div>
                        <button type="submit" className="w-40 bg-lightPink text-white font-semibold rounded-lg p-2.5 mt-15">Login</button>
                    </form>
                    <div className="flex mt-8 items-center space-x-32">
                    <span className="text-[#444444]">Sign in with</span>
                    <Image src={LogoGoggle} 
                    alt="LogoGoogle" 
                    width={40} 
                    height={40}
                    ></Image>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
