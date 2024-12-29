"use server"

import { DetailBooking } from "@/lib/types/detailBooking"

const bookingPayment = async (counselorId: string, name: string, price: string, sessionDate: Date, session: number) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/create-booking-and-pay`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                counselorId,
                name,
                price,
                sessionDate,
                session,
            }),
        });
        const data = await res.json();

        return data as DetailBooking;
    } catch (error) {
        console.log(error);
    }
}

export default bookingPayment