import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },

      async authorize(credentials, req) {
        console.log('dados do login', credentials)
        try {
          const response = await fetch('http://localhost:3000/auth/login/', {
            method: 'POST',
            headers:{
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            })
          });

          if (!response.ok) {
            console.log('msg:',response)
            throw new Error(`status: ${response.status}`);
          }

          const user = await response.json();

          if (user) {
            return user;
            } else {
            throw new Error('Usuário não encontrado na resposta da API');
            }

        } catch (error) {
           console.log('msg cath:',error)
          return null;
        }
      },
    })
  ],
  pages: {
    signIn: '/'
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    }
  }
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
