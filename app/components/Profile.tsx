"use client";
import {   useState } from "react";
import { uploadPic } from "../actions/uploadPic";
import { useSession } from "next-auth/react";
import {signOut} from "next-auth/react";
import { updates } from "../redux/features/Mode";
import {useDispatch,useSelector } from "react-redux";
import {Avatar,Menu,MenuItem,Divider,Switch, Box, Typography} from "@mui/material";
export default function  Profile({data}:{data:any}){
    const dispatch = useDispatch();
    const mode = useSelector((state:unknown)=>(state as {mode:{theme:string}}).mode.theme);
    const [anchorEl,setAnchorEl]=useState<null | HTMLElement>(null);
    const {data:session,update}=useSession();
    const open = Boolean(anchorEl);
    const handleClick = (e:React.MouseEvent<HTMLDivElement>) =>{
        setAnchorEl(e.currentTarget);
    }

    const onClose = ()=>{
        setAnchorEl(null);
    }

    const logOut = async()=>{
await signOut();
setAnchorEl(null);
    }

    const handlePic = async(e: React.ChangeEvent<HTMLInputElement>)=>{
        const img = e?.target?.files![0];
        update({image:URL.createObjectURL(img)});
const formData = new FormData();
img && formData.append("img",img);
formData.append("email",data.user.email);
await uploadPic(formData);
    }


    const handleChange = ()=>{
        dispatch(updates())
    }

    return(
        <Box sx={{display:"flex",gap:"10px",alignItems:"center"}}>
            <Typography variant="h6">{data.user.name}</Typography>
        <Avatar src={session?.user?.image ||""} sx={{height:"60px",width:"60px",objectFit:"contain"}} onClick={handleClick} />
        <Menu open={open} onClose={onClose} anchorEl={anchorEl}>
            <MenuItem onClick={logOut}>Logout</MenuItem>
            <Divider/>
            <MenuItem >
            <Switch checked={mode === "dark" ? true  : false} onChange={handleChange}/>
            </MenuItem>
            <Divider/>
            <MenuItem >
            <label htmlFor="img" >profile pic</label>
            </MenuItem>
        </Menu>

        <input type="file" id="img" style={{display:"none"}} onChange={handlePic}/>
        </Box>
    )
}