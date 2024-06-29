"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

export const createTodos=async(post:{email:any,content:string})=>{
 await axios.post("https://full-stack7back.vercel.app/post/createPost",{post});
 revalidatePath("/home")
}
