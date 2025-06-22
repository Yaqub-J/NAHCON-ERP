import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  providers: [],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        ;(session.user as any).id = token.sub
        ;(session.user as any).role = token.role
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-development",
  debug: process.env.NODE_ENV === "development",
}
