import { Box} from "@mui/material";
import Todo from "../components/Todo";
import Modal from "../components/Modal";
import { authOptions } from "../libs/authOptions";
export const metadata = {
    title:"Todos Task Manager | Home"
}

import { getServerSession } from "next-auth/next";

export default async function Home(){

    const data = await getServerSession(authOptions);
    return(
     <Box>
<Todo email={data?.user?.email}/>
<Modal data={data}/>
     </Box>
    )
}