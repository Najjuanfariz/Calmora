'use client';
import React, { useState, useEffect } from 'react';
import bookingPayment from '@/lib/hooks/booking/booking-payment'; 
import getAllCounselor from '@/lib/hooks/counselor/get-all-counselor';

interface DetailCounselor {
  _id: string;
  name: string;
  specialization: string;
  biography: string;
  price: string; 
  whatsappNumber: string;
}

export default function ProfessionalAdvisoryCouncil() {
  const [counselors, setCounselors] = useState<DetailCounselor[]>([]);
  const [selectedCounselor, setSelectedCounselor] = useState<DetailCounselor | null>(null);
  const [sessionCount, setSessionCount] = useState(1);
  const [customerName, setCustomerName] = useState(""); 
  const [sessionDate, setSessionDate] = useState<string>(""); 
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCounselor();
      if (data) {
        setCounselors(data);
      }
    };
    fetchData();

    const loadSnapScript = () => {
      const script = document.createElement('script');
      script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
      script.async = true;
      script.onload = () => {
        console.log("Snap script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load Snap script");
        alert("Gagal memuat skrip pembayaran, silakan coba lagi nanti.");
      };
      document.body.appendChild(script);
    };

    loadSnapScript();

  }, []); 

  const openModal = (counselor: DetailCounselor) => {
    setSelectedCounselor(counselor);
    setSessionCount(1); 
    setCustomerName("");
    setSessionDate("");
    setShowModal(true);
  };

  const handleBooking = async () => {
    if (!selectedCounselor || !customerName.trim() || !sessionDate) {
      alert("Harap isi semua data dengan benar!");
      return;
    }

    const totalPrice = parseInt(selectedCounselor.price) * sessionCount; 

    const bookingData = await bookingPayment(
      selectedCounselor._id,
      customerName.trim(),
      totalPrice.toString(),
      new Date(sessionDate),
      sessionCount
    );

    console.log('Response from backend:', bookingData);

    if (bookingData && bookingData.transaction) {
      if (typeof window !== "undefined" && window.snap) {
        window.snap.pay(bookingData.transaction, {
          onSuccess: () => {
            if (selectedCounselor?.whatsappNumber) {
              const url = `https://wa.me/${selectedCounselor.whatsappNumber}`;
              window.location.href = url;
            }
          },
          onPending: () => {
            alert("Pembayaran sedang diproses. Silakan tunggu.");
          },
          onError: () => {
            alert("Gagal memproses pembayaran. Silakan coba lagi.");
          },
          onClose: () => {
            alert("Pembayaran ditutup. Silakan coba lagi.");
          }
        });
      } else {
        alert("Snap payment library is not loaded properly. Please try again later.");
      }
    } else {
      alert("Gagal memproses pembayaran. Silakan coba lagi.");
    }
  };

  return (
    <div className="bg-cyan w-full py-16">
      <h1 className="text-center text-[40px] font-extrabold mb-12">Professional Advisory Council</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {counselors.map((counselor) => (
          <div key={counselor._id} className="bg-darkPink text-white rounded-lg p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-md font-extrabold text-[15px]">{counselor.name}</h2>
              <p className="text-sm font-normal mb-4 text-[12px]">{counselor.specialization}</p>
            </div>
            <p className="mb-6 font-semibold text-[13px]">
              {counselor.biography}
            </p>
            <div className="flex justify-between items-center mb-5">
              <p className="text-lg font-extrabold text-[15px]">{`Rp.${counselor.price} / sesi`}</p>
              <button
                className="bg-white text-darkPink font-semibold py-2 px-6 rounded-md"
                onClick={() => openModal(counselor)}
              >
                Pesan Sesi
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedCounselor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl text-center font-bold mb-4">Pesan Sesi</h2>
            <p className="mb-2">Konselor: {selectedCounselor.name}</p>
            <p className="mb-2">Harga per sesi: Rp.{selectedCounselor.price}</p>
            <div className="mb-4">
              <label className="block font-medium">Nama Pengorder</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Masukkan nama Anda"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Jumlah Sesi</label>
              <input
                type="number"
                min={1}
                value={sessionCount}
                onChange={(e) => setSessionCount(parseInt(e.target.value) || 1)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Pilih Tanggal Sesi</label>
              <input
                type="date"
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <p className="font-bold text-lg mb-4">
              Total Harga: Rp.{parseInt(selectedCounselor.price) * sessionCount}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-md"
              >
                Batal
              </button>
              <button
                onClick={handleBooking}
                className="bg-darkPink text-white font-semibold py-2 px-6 rounded-md"
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}