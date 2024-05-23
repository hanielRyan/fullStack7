"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
export const uploadPic = async(formData:FormData)=>{
await axios.post("http://localhost:5000/uploadPic",formData);
revalidatePath("/home");
}