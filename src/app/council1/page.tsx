import React from 'react';

export default function ProfessionalAdvisoryCouncil() {
  return (
    <div className="bg-pink-100 w-full py-16">
      <h1 className="text-center text-[40px] font-extrabold mb-12">Professional Advisory Council</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Card 1 */}
        <div className="bg-darkPink text-white rounded-lg p-8 shadow-lg">
          <div>
          <h2 className="text-md font-extrabold text-[15px]">Dr. Adul Hamid</h2>
          <p className="text-sm font-medium mb-4 text-[12px]">Psikologi Klinis</p>
          </div>
          <p className="mb-6 font-semibold text-[13px]">
            Dr. Adul Hamid adalah seorang psikolog klinis berpengalaman dengan lebih dari 1000 tahun praktik.
            Beliau ahli dalam menangani kasus depresi, kecemasan, dan trauma.
          </p>
          <div className="flex justify-between items-center mb-5">
            <p className="text-lg font-extrabold text-[15px]">Rp.500.000 / sesi</p>
            <button className="bg-white text-darkPink font-semibold py-2 px-6 rounded-md">Beli Sesi</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-darkPink text-white rounded-lg p-8 shadow-lg">
          <div>
          <h2 className="text-md font-extrabold text-[15px]">Dr. Najwan Raka Andeeka</h2>
          <p className="text-sm mb-4 font-medium text-[12px]">Konseling Keluarga</p>
          </div>
          <p className="mb-6 font-semibold text-[13px]">
            Dr. Najwan Raka Andeeka adalah konselor keluarga yang berdedikasi, dengan pendekatan yang hangat
            dan empatik, ia membantu keluarga mengatasi konflik dan membangun hubungan yang lebih kuat.
          </p>
          <div className="flex justify-between items-center mb-5">
            <p className="text-lg font-extrabold text-[15px]">Rp.250.000 / sesi</p>
            <button className="bg-white text-darkPink font-semibold py-2 px-6 rounded-md">Beli Sesi</button>
          </div>
        </div>

      </div>
    </div>
  );
}
