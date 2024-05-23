import { Box, Typography, IconButton,Tooltip,Paper } from '@mui/material';
import { MotionDiv } from './MotionDiv';
import Status from './Status';
import DeleteButton from './deleteButton';
const getTodo = async(email:string | null | undefined) => { 
    const response = await fetch(`https://todos-task-manager-back.onrender.com/post/${email}`,{cache:"no-store"});;
    const todo = await response.json();
    return todo;
}
export default async function Todo({email}:{email:string | null | undefined}){
    const todos = await getTodo(email);

    
    return(
        <Box sx={{ml:{md:"240px"},padding:"10px",mt:"80px"}}>
        
                {todos.length ? todos.reverse().map((todo:{content:string,email:string,status:string,_id:string})=>{
return   <MotionDiv initial={{opacity:0,y:-40}} key={todo._id} whileInView={{opacity:1,y:0}} layout>
  <Paper  sx={{display:"flex",alignItems:"center",mb:"20px",borderRadius:"10px",padding:"10px"}} elevation={3}>
    <Typography sx={{flexGrow:1}}>{todo.content}</Typography>
    <Status todo={todo}/>
    <Tooltip title="delete">
    <IconButton>
<DeleteButton _id={todo._id}/>
    </IconButton>
    </Tooltip>

</Paper>
</MotionDiv>
                }) 
                      
            :
            <Box sx={{display:"grid",placeItems:"center",height:"70vh"}}>
            <Typography sx={{fontSize:{xs:"20px",sm:"30px",md:"50px"},textWrap:"wrap",textAlign:"center"}} >Create a todo to view it 😊.</Typography> 
            </Box>}

        </Box>
        
    )
}