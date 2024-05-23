"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
export const uploadPic = async(formData:FormData)=>{
await axios.post("https://todos-task-manager-back.onrender.com/uploadPic",formData);
revalidatePath("/home");
}