"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
export const updateStatus = async(_id:string)=>{
    await axios.get(`https://todos-task-manager-back.onrender.com/post/updateStatus/${_id}`);
    revalidatePath("/home");
}