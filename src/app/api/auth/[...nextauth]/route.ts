import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' }
			},

            async authorize(credentials, req) {
				try {
                    const user = { id: "1", name: "J Smith", email: "test@example.com", password: "test"}

                    if (user) {
                        // Any object returned will be saved in `user` property of the JWT
                        return user
                    } else {

                        // If you return null then an error will be displayed advising the user to check their details.
                        throw new Error('Usuário não encontrado na resposta da API');
                    }
				  /* const response = await fetch('http://10.17.21.28:3800/auth/login/', {
					method: 'POST',
					headers: {
					  'Content-type': 'application/json'
					},
					body: JSON.stringify({
                        email: credentials?.email,
					  password: credentials?.password
					})
				  });
			  
				  if (!response.ok) {
					throw new Error(`status: ${response.status}`);
				  }
			  
				  const user = await response.json();
			  
				  if (user) {
			  
					return user;
				  } else {
					throw new Error('Usuário não encontrado na resposta da API');
				  }*/
				} catch (error) {
				
				  return null;
				} 
			},
        })
    ],
    pages: {
		signIn: '/'
	},
    /* callbacks: {
		async jwt({ token, user }) {
			user && (token.user = user)
			return token
		},
		async session({ session, token }){
			session = token.user as any
			return session
		}
	} */
}

const handler = NextAuth(nextAuthOptions)

export {handler as GET, handler as POST, nextAuthOptions}