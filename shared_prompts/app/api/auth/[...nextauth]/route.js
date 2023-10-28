import NextAuth from "next-auth/next";
import GooglePovider from 'next-auth/providers/google';
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth( {
    providers : [
        GooglePovider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks : {
        async session({session}){
            const sessionUser = await User.findOne({ email: session.user.email });
            if (sessionUser) {
                session.user.id = sessionUser._id.toString();
            } else {
                // Handle missing user (maybe log an error or redirect to sign in)
            }
            return session;
    
        },
        async signIn({profile}){
    
            try {
               await connectToDB();
    
               //if user already exists
               const userExists = await User.findOne({
                email: profile.email
               })
               
               //if not , create a new user
               if(!userExists){
                await User.create({
                  email : profile.email,
                  username : profile.name.replace(" ", "").toLowerCase(),
                  image : profile.picture  
                })
               }
    
               return true;
            } catch (error) {
                console.log(error);
                return false;
            }
    
        }
    }
   
})

export {handler as GET , handler as POST};