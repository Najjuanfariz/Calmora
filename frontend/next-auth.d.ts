import NextAuth from "next-auth";

// Extend tipe bawaan `Session` dan `JWT`
declare module "next-auth" {
    interface Session {
        user: {
            id: string; // ID pengguna
            name?: string; // Nama pengguna
            email?: string; // Email pengguna
            image?: string; // Foto profil
            accessToken?: string; // Token akses
            refreshToken?: string; // Token refresh (opsional)
            provider?: string; // Nama penyedia
        };
    }

    interface JWT {
        id?: string; // ID pengguna
        accessToken?: string; // Token akses
        refreshToken?: string; // Token refresh (opsional)
        provider?: string; // Nama penyedia
    }
}
