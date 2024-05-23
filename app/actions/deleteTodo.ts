"use server";
import { revalidatePath } from "next/cache";
import axios from "axios";
export const deleteTodo = async(_id:string) => {
    await axios.delete(`http://localhost:5000/post/deletePost/${_id}`);
    revalidatePath("/home");
}