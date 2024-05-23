"use client";
import {Alert} from "@mui/material";
import { updateStatus } from "../actions/status";
export default function Status({todo}:{todo:{status:string,_id:string}}){
    const handleClick=async()=>{
await updateStatus(todo._id);
    }
    return(
        <Alert onClick={handleClick} severity={todo.status === "pending" ? "warning" : undefined} sx={{cursor:"pointer"}}>{todo.status}</Alert>
    )
}