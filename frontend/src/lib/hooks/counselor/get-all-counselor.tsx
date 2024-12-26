"use server"

import { DetailCounselor } from "@/lib/types/detailCounselor";

const getAllCounselor = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/counselors`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        return data as DetailCounselor[];
     } catch (error) {
        console.log(error);
    }
}

export default getAllCounselor
