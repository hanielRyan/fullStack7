"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

export const createTodos=async(post:{email:any,content:string})=>{
 await axios.post("https://todos-task-manager-back.onrender.com/post/createPost",{post});
 revalidatePath("/home")
}