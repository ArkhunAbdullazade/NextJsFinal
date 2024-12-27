import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUser } from "@/data/users";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = findUser(credentials.email, credentials.password);
        if (!user) return null;
        return { id: user.email, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
