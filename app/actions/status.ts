"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
export const updateStatus = async(_id:string)=>{
    await axios.get(`http://localhost:5000/post/updateStatus/${_id}`);
    revalidatePath("/home");
}