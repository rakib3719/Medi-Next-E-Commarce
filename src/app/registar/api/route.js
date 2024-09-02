import { connectDB } from "@/app/lib/connectDB";
import bcrypt from 'bcrypt'

export const POST = async(request)=>{

  

const user =await request.json();

const securePassword= bcrypt.hashSync(user?.password, 14);
const newUser = {
    name: user?.name,
    email: user?.email,
    password: securePassword,
    image : user?.photoURL
}

console.log("newuser--->", newUser);


try {
    const db =await connectDB()
const userCollection = db.collection("users")


const exist =await userCollection.findOne({email: newUser.email})
if(exist){
    return Response.json({message: "Email already exist"}, {status: 400, statusText: "Email already used"
    })
}



const response = await userCollection.insertOne(newUser)
console.log(response);

return Response.json({message: "sucess"}, {status: 200})

} catch (error) {
    return Response.json({message: error}, {status:400})
}

}