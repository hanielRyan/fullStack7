import { Box} from "@mui/material";
import Todo from "../components/Todo";
import { authOptions } from "../libs/authOptions";
export const metadata = {
    title:"Todos Task Manager | Home"
}

import { getServerSession } from "next-auth/next";

const getTodo = async(email:string | null | undefined) => { 
    const response = await fetch(`https://todos-task-manager-back.onrender.com/post/${email}`,{cache:"no-store"});
    const todo = await response.json();
    return todo;
}

export default async function Home(){

    const data = await getServerSession(authOptions);
    const todos = await getTodo(data?.user?.email);
    return(
     <Box>
<Todo  todos={todos} data={data}/>
     </Box>
    )
}