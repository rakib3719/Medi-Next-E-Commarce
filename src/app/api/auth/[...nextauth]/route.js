import { connectDB } from "@/app/lib/connectDB";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'

const handler = NextAuth({
session: {
    strategy:"jwt",
    maxAge: 30 * 24 * 60 * 60
},

providers: [

CredentialsProvider({
    credentials: {
       email: {},
       password: {}
      
    },

async authorize (credentials)  {
    
const {email, password} = credentials;

if(!email || !password){
    return null;
}
const db = await connectDB();
const userCollection = db.collection("users")
const existEmail = await userCollection.findOne({email: email});
if(!existEmail){
    return null;
}



  const compare =  bcrypt.compareSync(password, existEmail.password)
if(!compare){
    return null;
}

return existEmail;


}

},


)


],

callbacks: {},
pages: {
    signIn: '/login'
}


})







export{handler as GET, handler as POST}