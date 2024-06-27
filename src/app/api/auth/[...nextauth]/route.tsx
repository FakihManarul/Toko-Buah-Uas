// import { NextAuthOptions } from "next-auth";
// import nextAuth from "next-auth/next";
// import GoogleProvider from 'next-auth/providers/google'
// import { prisma } from '@/lib/prisma'

// const clientId: process.env.GOOGLE_CLIENT_ID!
// const clientSecret: process.env.GOOGLE_CLIENT_SECRET!

// const authOption: NextAuthOptions = {
//     session: {
//         strategy: 'jwt'
//     },
//     providers: [
//         GoogleProvider({
//             clientId: GOOGLE_CLIENT_ID,
//             clientSecret: GOOGLE_CLIENT_SECRET
//         })
//     ],
//     callbacks: {
//         async signIn({ account, profile}) {
//             if (!profile?.email){
//                 throw new Error('No profile')
//             },
            
//             await prisma.user.upsert({
//                 where: {
//                     email: profile.email,
//                 },
//                 create: {
//                     email: profile.email,
//                     name: profile.name,
//                 },
//                 update: {
//                     name: profile.name,
//                 },
//             })

//             return true
//         }
//     }
// }

// const handler = nextAuth(authOption)
// export {handler as GET, handler as POST}