"use client"

import { SessionProvider } from "next-auth/react"

type sessionProviderProps = {
    children: React.ReactNode
}

function NextAuthSessionProvider({children}: sessionProviderProps){
    return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthSessionProvider