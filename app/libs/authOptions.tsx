import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { userModel } from "./userModel";
import { connectDB } from "./mongodb";
import bcrypt from "bcrypt";
export const authOptions:NextAuthOptions ={
providers: [
        Credentials({
            name:"credentials",
            credentials:{
                email:{
                    type:"string"
                },
                password:{
                    type:"string"
                }
            },
            async authorize(credentials){
                try{
                    await connectDB();
                    const email = credentials?.email;
                    const password = credentials?.password;
                    console.log(password)
                    const user = await userModel.findOne({email}).exec();
                    if(user && user.verified === true){
                        const passwordMatch = password && await bcrypt.compare(password,user.password);
                        console.log("passwordMatch",passwordMatch)
                        if(passwordMatch){
                            return user;
                        }else{
                            return null;
                        }
                    } else{
                        return null;
                    }
                }catch(err:any){
                    console.log("err",err.message);
                    return  null;
                }
            }
        }
),
Google({
    clientId:process.env.CLIENT_ID || "",
    clientSecret:process.env.CLIENT_SECRET || ""
})
    ],
    secret:process.env.NEXTAUTH_SECRET,
    session:{
        strategy:"jwt"
    },
    pages:{
        signIn:"/login"
    },
    callbacks:{

 jwt:async({token,user,session,trigger})=>{

//you should trigger the update function to make changes to the user session. you can get the update function from useSession from next-auth/react. it can only be used in client.


    if(trigger === "update" && session?.image){
        token.image = session.image;

    }
return token;
    
},
 session:async({session,user,token})=>{
return session;
        }
    }
}