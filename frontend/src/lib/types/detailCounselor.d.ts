export type Certification = {
    type: string;
};

export type DetailCounselor = {
    _id: string;
    name: string;
    email: string;
    whatsappNumber: string;
    specialization: string;
    education: string;
    experience: string;
    certification: Certification[];
    biography: string;
    rating: number;
    price: string;
    availability: boolean
};
