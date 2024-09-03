import { connectDB } from "@/app/lib/connectDB";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'

const handler = NextAuth({
session: {
    strategy:"jwt",
    maxAge: 30 * 24 * 60 * 60
},
secret: "adifhnlkdajfkjdfakdmfkadjfkjfkugrh",

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
const user = await userCollection.findOne({email: email});
if(!user){
    return null;
}



  const compare =  bcrypt.compareSync(password, user.password)
if(!compare){
    return null;
}

return {
 
    name: user.name,
    email: user.email,
    image: user.image,
    role: user.role, // Ensure role is included
  };


}

},


)


],

callbacks: {

async jwt ({token, user}){

if(user){

    token.name = user.name;
    token.email = user.email;
    token.image = user.image;
    token.role = user.role;

}
return token

},


async session ({session, token}){
    if(token){
        session.user = {
            name: token.name,
            email: token.email,
            image : token.image,
            role : token.role
        }
    }

    return session;
}
},
pages: {
    signIn: '/login'
}


})







export{handler as GET, handler as POST}