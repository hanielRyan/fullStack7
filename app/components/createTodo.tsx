"use client";
import { TextField, Button } from "@mui/material";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { createTodos } from "../actions/createTodo";
import  { useState,useEffect } from "react";
export default function CreateTodo({setOpen,data}:{data:any,setOpen:React.Dispatch<React.SetStateAction<boolean>>}){
    const [content,setContent]=useState("");
    const [disabled,setDisabled]=useState(false);
    const createTodo = async(e:React.FormEvent) => {
        e.preventDefault()
        const post = {
            email:data.user.email,
            content
        }
        setOpen(false);
        await createTodos(post);
        setDisabled(true);
    }


    useEffect(()=>{
setDisabled(false);
    },[createTodo])
    return(
        <form  onSubmit={createTodo} style={{display:"flex",flexDirection:"column",gap:"30px"}}>
<TextField variant="standard" label="enter your todo..." required value={content} onChange={(e)=>setContent(e.target.value)} />
<Button variant="contained" disabled={disabled} type="submit" sx={{padding:"10px",position:"relative"}}>create <LocalPostOfficeIcon sx={{position:"absolute",right:"10px"}} /></Button>
</form>
    )
}