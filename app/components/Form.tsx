"use client";
type props = {
    signin:boolean,
}
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { TextField,Button, Typography,Box,styled,Alert } from "@mui/material";
import axios from  "axios";
import { useRouter } from "next/navigation";
import GoogleIcon from '@mui/icons-material/Google';
import Link from "next/link";
import {useForm} from "react-hook-form";
import { useState } from "react";
const MotionDiv = dynamic(() => import("./MotionDiv"), { ssr: false });
export default function Form({signin}:props){
    const {register,handleSubmit,formState:{errors}}=useForm();
    const router = useRouter();
    const [error,setError]=useState("");
const [disabled,setDisabled]=useState(false);

    const login = async(data:unknown)=>{
        setDisabled(true);
        try{
          const res =  await signIn("credentials",{
                email:(data as {email:string}).email,
                password:(data as {password:string}).password,
                redirect:false
            });
            if(res?.ok){
            router.push("/home");
            setDisabled(false);
            }else{
              setError("invalid credentials");
            }
        }catch(err:any){
            console.log("err from loging in ",err);
        }
    }

    useEffect(()=>{

        const fetchData = async()=>{
            await axios.get("https://todos-task-manager-back.onrender.com/");
        } 

        const intervalId = setInterval(fetchData, 5000); // Call every 5 seconds

        return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks

    },[])

    const signUp = async(data:unknown) => {
        setDisabled(true);
        try{
          const response = await axios.post("https://todos-task-manager-back.onrender.com/user/createUser",{data},{withCredentials:true});
          return response;
        }catch(err){
setError((err as {response:{data:string}}).response.data);
        }
    
    }
    const handleFormSubmit = async(data:unknown) => {

if(signin){
    const response = await signUp(data);
    if(response){
        router.push("/otp");
        setDisabled(false);
    }else{
        setDisabled(false);

    }

}else{
 await login(data);
}
           
    
    }

    const GoogleButton = styled(Button)({
        backgroundColor:"white",
       padding:"10px",
       color:"black",
       '&:hover':{
        backgroundColor:"white",

       }
    })

    const handleGoogle = async()=>{
     await signIn("google",{
        callbackUrl:"/home"
     });
    }

    return(
        <MotionDiv initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.3,ease:"linear"}}>
        <Box component={"form"}  style={{display:"grid",gap:"30px"}} onSubmit={handleSubmit(handleFormSubmit)} >
<Typography variant="h4" textAlign={"center"}>👋 {signin ? "Create" : "Login to"} your account</Typography>
{signin ? <TextField error={errors?.username ? true : false}  label="username" autoFocus {...register("name",{
    required:"true"
})} helperText={errors?.name?.type === "required" && "username is required."} />  : null}
<TextField label="email" autoFocus={signin ? false : true} {...register("email",{
    required:"true",
    pattern: /^([^\s@]+)@gmail\.com$/
})} helperText={errors?.email?.type === "required" ? "email is required." : errors?.email?.type === "pattern" ? "pattern is invalid" : undefined} error={errors?.email ? true : false} />
<TextField label="password" {...register("password",{
    required:"true",
    minLength:5,
    maxLength:7
})} error={errors?.password ? true : false} helperText={errors?.password?.type === "required" ? "password is required." : errors?.password?.type === "minLength" ? "password should be more than 5 characters"  : errors?.password?.type === "maxLength" ? "password should be below 7 characters":undefined} type="password"/>

<Button variant="contained" sx={{padding:"10px"}} type="submit" disabled={disabled}>register</Button>
{error ? <Alert severity="error">{error}</Alert> : null}
<Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
<Box sx={{flexGrow:1,height:"1px",backgroundColor:"black"}}></Box>
<Typography>OR</Typography>
<Box sx={{flexGrow:1,height:"1px",backgroundColor:"black"}}></Box>
</Box>
<GoogleButton variant="contained"  onClick={handleGoogle}><GoogleIcon sx={{color:"red",mr:"10px"}} /> {signin ? "Signin" : "Login" } with google</GoogleButton>
<Typography sx={{textAlign:"center"}}>{signin ? "already have an account ? " : "do not have an account ?"} <Link href={signin ? "/login" : "/"}>{signin ? "login" : "signin"}</Link></Typography>
        </Box>
        </MotionDiv>
    )
}