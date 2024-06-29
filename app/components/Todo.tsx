"use client";
import { Box, Typography, IconButton,Tooltip,Paper } from '@mui/material';
import dynamic from "next/dynamic";
import Status from './Status';
import {SpeedDial,SpeedDialAction,SpeedDialIcon} from "@mui/material";
import Modal from "../components/Modal";
import { useOptimistic,useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteButton from './deleteButton';
import { Session } from 'next-auth';

const MotionDiv = dynamic(()=>import("./MotionDiv"),{ssr:false})

export default  function Todo({todos,data}:{data:Session | null,todos:[{content:string,email:string,status:string,_id:string}]}) {
    const [optimistcTodo,setOptimisticTodo]=useOptimistic(todos);
    const [open,setOpen]=useState(false);
    const handleChange=()=>{
        setOpen(true);
    }
    return(
        <Box sx={{ml:{md:"240px"},padding:"10px",mt:"80px"}}>
            <Modal data={data}  setOptimisticTodo={setOptimisticTodo}  open={open} setOpen={setOpen}/>
        
                {optimistcTodo.length ? optimistcTodo.map((todo:{content:string,email:string,status:string,_id:string},index:number)=>{
return   <MotionDiv initial={{opacity:0,y:-40}} key={todo._id || index} whileInView={{opacity:1,y:0}} layout>
  <Paper  sx={{display:"flex",alignItems:"center",mb:"20px",borderRadius:"10px",padding:"10px"}} elevation={3}>
    <Typography sx={{flexGrow:1}}>{todo.content}</Typography>
    <Status todo={todo}/>
    <Tooltip title="delete">
    <IconButton>
<DeleteButton _id={todo._id} setOptimisticTodo={setOptimisticTodo}/>
    </IconButton>
    </Tooltip>

</Paper>
</MotionDiv>
                }) 
                
                      
            :
            <Box sx={{display:"grid",placeItems:"center",height:"70vh"}}>
            <Typography sx={{fontSize:{xs:"20px",sm:"30px",md:"50px"},textWrap:"wrap",textAlign:"center"}} >Create a todo to view it 😊.</Typography> 
            </Box>}

            <SpeedDial ariaLabel="speed dial" icon={<SpeedDialIcon/>} sx={{position:"fixed",bottom:16,right:16}}>
<SpeedDialAction icon={<AddRoundedIcon/>} tooltipTitle="create todo" onClick={handleChange} />
</SpeedDial>

        </Box>
        
    )
}