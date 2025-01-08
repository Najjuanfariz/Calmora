"use client";
import Image from "next/image";
import React, { useState } from "react";
import Fotoprofile from "@/assets/icons/Fotoprofile.svg";

const Profile: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col min-h-auto bg-white text-black">
      <main className="flex flex-col items-center py-8 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Account Information</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Profile Section */}
          <div className="col-span-1 flex flex-col items-center bg-white border-2 border-[#525252] rounded-lg p-6 shadow-lg">
            <Image
              src={Fotoprofile}
              alt="Foto profil Abdul Hamid"
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
            <span className="text-lg font-semibold text-lightPink">Abdul Hamid</span>
          </div>

          {/* General Information */}
          <div className="col-span-2 bg-white border-2 border-[#525252] rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">General Information</h2>
            <div className="border-2 border-[#525252] rounded-lg p-4">
              <label className="block text-xs font-medium mb-1">Nama</label>
              <input
                type="text"
                value="Abdul Hamid"
                readOnly
                className="w-full border-none p-2 font-semibold focus:outline-none"
              />
            </div>
          </div>

          {/* Security Section */}
          <div className="col-span-3 bg-white border-2 border-[#525252] rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="border-2 border-[#525252] rounded-lg p-4">
                <label className="block text-xs font-medium mb-1">Email</label>
                <input
                  type="email"
                  value="HamidCalmoraRPL@gmail.com"
                  readOnly
                  className="w-full font-semibold border-none p-2 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div className="border-2 border-[#525252] rounded-lg p-4">
                <label className="block text-xs font-medium mb-1">Password</label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    value="Calmora123"
                    readOnly
                    className="w-full font-semibold border-none p-2 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-lg"
                  >
                    {isPasswordVisible ? "🙈" : "🐵"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
