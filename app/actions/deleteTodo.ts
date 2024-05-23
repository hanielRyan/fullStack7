"use server";
import { revalidatePath } from "next/cache";
import axios from "axios";
export const deleteTodo = async(_id:string) => {
    await axios.delete(`https://todos-task-manager-back.onrender.com/post/deletePost/${_id}`);
    revalidatePath("/home");
}