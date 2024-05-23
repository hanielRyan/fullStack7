import Image from "next/image";
import { Box } from "@mui/material";
import Form from "../components/Form";
export const metadata = {
    title:"Todos Task Manager | Login",
}
export default function Login(){
    return(
        <Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(2,1fr)"},height:"100vh"}}>
<Box sx={{position:"relative",display:{xs:"none",md:"block"}}}>
<Image src="/hero pic.jpg" alt="" fill priority/>
</Box>
<Box sx={{display:"grid",placeItems:"center",padding:"10px"}}>
<Form signin={false} />
</Box>
        </Box>
    )
}