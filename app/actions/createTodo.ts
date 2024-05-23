"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

export const createTodos=async(post:{email:any,content:string})=>{
 await axios.post("http://localhost:5000/post/createPost",{post});
 revalidatePath("/home")
}