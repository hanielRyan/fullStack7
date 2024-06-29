"use server";
import { revalidatePath } from "next/cache";
import axios from "axios";
export const deleteTodo = async(_id:string) => {
    await axios.delete(`https://full-stack7back.vercel.app/post/deletePost/${_id}`);
    revalidatePath("/home");
}
