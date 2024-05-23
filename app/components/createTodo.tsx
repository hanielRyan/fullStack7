"use client";
import { TextField, Button } from "@mui/material";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { createTodos } from "../actions/createTodo";
import React, { useState } from "react";
export default function CreateTodo({setOpen,data}:{data:any,setOpen:React.Dispatch<React.SetStateAction<boolean>>}){
    const [content,setContent]=useState("");
    const createTodo = async(e:React.FormEvent) => {
        e.preventDefault()
        const post = {
            email:data.user.email,
            content
        }
        await createTodos(post);
        setOpen(false);
    }
    return(
        <form  onSubmit={createTodo} style={{display:"flex",flexDirection:"column",gap:"30px"}}>
<TextField variant="standard" label="enter your todo..." required value={content} onChange={(e)=>setContent(e.target.value)} />
<Button variant="contained" type="submit" sx={{padding:"10px",position:"relative"}}>create <LocalPostOfficeIcon sx={{position:"absolute",right:"10px"}} /></Button>
</form>
    )
}