"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
export const updateStatus = async(_id:string)=>{
    await axios.get(`https://full-stack7back.vercel.app/post/updateStatus/${_id}`);
    revalidatePath("/home");
}
