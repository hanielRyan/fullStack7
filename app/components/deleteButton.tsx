"use client";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { deleteTodo } from '../actions/deleteTodo';
export default function DeleteButton({_id}:{_id:string}){
    const handleDelete = async(_id:string) => {
        await deleteTodo(_id);
    }
    return(
    <DeleteSharpIcon color="error" sx={{fontSize:"30px"}} onClick={()=>handleDelete(_id)}/>
    )
}