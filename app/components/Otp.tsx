"use client";
import { useState,useEffect,useRef } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import {Alert} from "@mui/material";
import axios from "axios";
import { MotionDiv } from "./MotionDiv";
export default function OtpField(){
    const [otp,setOtp] = useState(["","","",""]);
    const [error,setError]=useState<string>("");
const router = useRouter();
    const [email,setEmail]=useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [activeOtpIndex,setActiveOtpIndex]=useState(0);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,index:number)=>{
        
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
        if(activeOtpIndex < 3 && e.target.value){
            setActiveOtpIndex(activeOtpIndex + 1);
        }
    }

const handleBackSpace = (e:React.KeyboardEvent,dig:string) =>{
    if(e.key === "Backspace" && dig === "" && activeOtpIndex > 0){
        setActiveOtpIndex(activeOtpIndex - 1);
        e.preventDefault()
    }
}


    useEffect(()=>{
inputRef?.current?.focus();
    },[activeOtpIndex])

const verifyOtp = async()=>{
    const isFilled = otp.every(dig => dig !== "" && dig !== " ");
    if(isFilled){
        try{
            await axios.post("https://todos-task-manager-back.onrender.com/otp/verifyOtp",{otp:otp.join("")},{withCredentials:true});
            router.push("/login");
        }catch(err){
            setError((err as {response:{data:string}}).response.data);
        }
    }
}

useEffect(()=>{
verifyOtp();
},[otp])

const getEmail = async()=>{
    const email = await axios.get("https://todos-task-manager-back.onrender.com/otp/email",{withCredentials:true});
     setEmail(email.data);
}

useEffect(()=>{
getEmail();
},[])

    return(
        <Box>
            <MotionDiv initial={{opacity:0,x:-60}} animate={{opacity:1,x:0}} transition={{ease:"linear"}}>
            <Typography variant="h5" sx={{textAlign:"center"}}>please enter the otp we sent to : <b style={{display:"block"}}>{email}</b></Typography>
            </MotionDiv>
            <MotionDiv transition={{ease:"linear",delay:0.2}} initial={{opacity:0,x:-60}} animate={{opacity:1,x:0}} style={{display:"flex",flexDirection:"column"}}>
            <Box sx={{display:"flex",gap:"10px",alignItems:"center",justifyContent:"center",mt:"40px"}}>
            {otp.map((dig,index)=>{
                return <TextField sx={{height:"100px",width:"60px"}} value={dig} onChange={(e)=>handleChange(e,index)} key={index}  inputProps={{maxLength:1}} inputRef={activeOtpIndex == index ? inputRef : null} onKeyDown={(e)=>handleBackSpace(e,dig)}/>
            })}
                        
            </Box>
            {error && <Alert severity="error">{error}</Alert>}
            </MotionDiv>
        </Box>
    )
}