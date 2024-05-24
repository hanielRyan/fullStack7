"use client";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { deleteTodo } from '../actions/deleteTodo';
export default function DeleteButton({_id,setOptimisticTodo}:{_id:string,setOptimisticTodo:React.Dispatch<React.SetStateAction<any>>}){
    const handleDelete = async(_id:string) => {
      setOptimisticTodo((prev:[{_id:string}])=>prev.filter((todo:{_id:string})=>todo._id !== _id));
        await deleteTodo(_id);
    }
    return(
    <DeleteSharpIcon color="error" sx={{fontSize:"30px"}} onClick={()=>handleDelete(_id)}/>
    )
}