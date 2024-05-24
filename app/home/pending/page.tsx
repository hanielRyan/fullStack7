
export const metadata={
    title:"Todos Task Manager | Pending"
}

import { MotionDiv } from "@/app/components/MotionDiv";
import Status from "@/app/components/Status";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/libs/authOptions";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";

const getPendingTodos=async()=>{
    const data = await getServerSession(authOptions);
    const response = await fetch(`https://todos-task-manager-back.onrender.com/post/pending/${data?.user?.email}`,{cache:"no-store"});
    const pendingTodos = await response.json();
    return pendingTodos;
}

export default async function Pending(){
    const pendingTodos = await getPendingTodos();
    return(
        <Box sx={{ml:{md:"240px"},padding:"10px",mt:"80px"}}>
        {pendingTodos.length ? pendingTodos.reverse().map((todo:{content:string,email:string,status:string,_id:string})=>{
      return   <MotionDiv initial={{opacity:0,y:-40}} key={todo._id} whileInView={{opacity:1,y:0}} layout>
      <Paper  sx={{display:"flex",alignItems:"center",mb:"20px",borderRadius:"10px",padding:"10px"}} elevation={3}>
        <Typography sx={{flexGrow:1}}>{todo.content}</Typography>
        <Status todo={todo}/>
    
    </Paper>
    </MotionDiv>
        }) : <Box sx={{display:"grid",placeItems:"center",height:"70vh"}}>
        <Typography sx={{fontSize:{xs:"20px",sm:"30px",md:"50px"},textWrap:"wrap",textAlign:"center"}} >All your todos are completed😊.</Typography> 
        </Box>}
         </Box>
    )
}


