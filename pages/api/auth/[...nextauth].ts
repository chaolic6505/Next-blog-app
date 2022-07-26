import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"

// import { db } from '../../../firebase.config'
// import * as firebaseFunctions from 'firebase/firestore'

// type providerConfig = {
//     clientId: string,
//     clientSecret: string,
// };


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
});
