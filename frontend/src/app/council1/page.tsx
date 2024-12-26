'use client';
import React, { useState, useEffect } from 'react';

// Tipe DetailCounselor
interface DetailCounselor {
  _id: string;
  name: string;
  specialization: string;
  biography: string;
  price: string;
}

// Fungsi fetch dari hooks
import getAllCounselor from '@/lib/hooks/counselor/get-all-counselor';

export default function ProfessionalAdvisoryCouncil() {
  const [counselors, setCounselors] = useState<DetailCounselor[]>([]); // Tipe array di-set

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCounselor();
      if (data) {
        setCounselors(data); // Tangani undefined
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-cyan w-full py-16">
      <h1 className="text-center text-[40px] font-extrabold mb-12">Professional Advisory Council</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {counselors.map((counselor, _id) => (
          <div key={_id} className="bg-darkPink text-white rounded-lg p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-md font-extrabold text-[15px]">{counselor.name}</h2>
              <p className="text-sm font-normal mb-4 text-[12px]">{counselor.specialization}</p>
            </div>
            <p className="mb-6 font-semibold text-[13px]">
              {counselor.biography}
            </p>
            <div className="flex justify-between items-center mb-5">
              <p className="text-lg font-extrabold text-[15px]">{`Rp.${counselor.price} / sesi`}</p>
              <button className="bg-white text-darkPink font-semibold py-2 px-6 rounded-md">Beli Sesi</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
