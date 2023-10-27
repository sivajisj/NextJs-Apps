import NextAuth from "next-auth/next";
import GooglePovider from 'next-auth/providers/google';

const handler = NextAuth( {
    providers : [
        GooglePovider({
            clientId: "",
            clientSecret: '',
        })
    ],
    async session({session}){

    },
    async signIn({profile}){

    }
})

export {handler as GET , handler as POST};