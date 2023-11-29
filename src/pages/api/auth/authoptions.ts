import { GetServerSidePropsContext } from "next";
import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github"
export const authoptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string
    }),
    CredentialsProvider({
      credentials: {
        // Define your credentials fields here, e.g., email, password
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const session: any = {
          email: credentials?.email,
          
        };
        return session;
      },
    }),
  ],
 
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "default-secret",
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authoptions);
};


// To store github crendeentials in db

// // auth/[...nextauth].js
// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
// import connectDB from '../../mongodb';

// connectDB();

// export default NextAuth({
//   providers: [
//     Providers.GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       // Store information in the database (MongoDB example)
//       const User = mongoose.model('User', {
//         githubId: String,
//         email: String,
//         name: String,
//       });

//       await User.updateOne(
//         { githubId: profile.id },
//         {
//           $setOnInsert: {
//             githubId: profile.id,
//             email: profile.email || '',
//             name: profile.name || '',
//           },
//         },
//         { upsert: true }
//       );

//       // Update the session with the user information
//       return Promise.resolve(true);
//     },
//   },
// });
