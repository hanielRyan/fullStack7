"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
export const uploadPic = async(formData:FormData)=>{
await axios.post("https://full-stack7back.vercel.app/uploadPic",formData);
revalidatePath("/home");
}
