import OtpField from "../components/Otp";
import {Box,Typography,TextField} from "@mui/material";
import Image from "next/image";
export default function Otp(){
    return(
        <Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(2,1fr)"},height:"100vh"}}>
<Box sx={{position:"relative",display:{xs:"none",md:"block"}}}>
                <Image src="/hero pic.jpg" alt="" fill priority/>
            </Box>
            <Box sx={{display:"grid",placeItems:"center"}}>
                <OtpField/>
            </Box>
        </Box>
    )
}