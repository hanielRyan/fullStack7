"use client";
import {Modal,Box,Avatar, Typography } from "@mui/material";
import CreateTodo from "./createTodo";
import {Dispatch,SetStateAction} from "react";

export default function ModalComponent({data,setOptimisticTodo,open,setOpen}:{setOpen:Dispatch<SetStateAction<boolean>>,open:boolean,data:any,setOptimisticTodo:React.Dispatch<React.SetStateAction<any>>}){
    return(
        <>
 
        <Modal open={open} sx={{display:"grid",placeItems:"center"}}>
    <Box sx={{backgroundColor:"background.default",borderRadius:"5px",width:"80%",maxWidth:"600px",maxHeight:"300px",display:"flex",padding:"10px",flexDirection:"column",gap:{xs:"10px",sm:"20px",md:"30px"}}}>
<Typography  variant="h5" textAlign={"center"} sx={{color:"text.primary"}}>👋 Create Your Todo</Typography>
<Box sx={{display:"flex",gap:"20px",alignItems:"center"}}>
<Avatar src={data.user.image} sx={{height:"60px",width:"60px"}}/>
<Typography textAlign="center" sx={{color:"text.primary"}}>{data.user.name}</Typography>
</Box>
<CreateTodo setOpen={setOpen} data={data} setOptimisticTodo={setOptimisticTodo}/>

    </Box>
</Modal>
</>
    )
}