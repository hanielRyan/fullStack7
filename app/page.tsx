import Image from "next/image";
import {  Box } from "@mui/material";
import Form from "./components/Form";
export default function Home(){
  return(
    <Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(2,1fr)"},height:"100vh"}}>
<Box sx={{position:"relative",display:{xs:"none",md:"block"}}}>
  <Image src="/hero pic.jpg" alt="" fill priority/>
</Box>
<Box sx={{display:"grid",placeItems:"center"}}>
  <Form signin={true} />
</Box>
</Box>
  )
}