"use client";
import { useState } from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import {IconButton,Drawer,List,ListItem,ListItemText,ListItemButton,ListItemIcon,Divider} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import Link from 'next/link';
export default function Hamburger(){
    const [open,setOpen] = useState(false);
    const toggleDrawer = (value:boolean)=>{
setOpen(value);
    }
    return(
    <>
        <IconButton sx={{display:{xs:"block",md:"none"}}}>
<MenuSharpIcon sx={{color:"white",fontSize:"30px"}} onClick={()=>toggleDrawer(true)}/>
</IconButton>
<Drawer open={open} onClose={()=>toggleDrawer(false)} sx={{'& .MuiDrawer-paper':{width:"240px"}}}>
<List>
                <ListItem>
                    <ListItemButton>
                    <Link href="/home" style={{textDecoration:"none",display:"flex"}} onClick={()=>toggleDrawer(false)}>
                    <ListItemIcon>
                    <HomeIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="HOME" sx={{color:"text.primary"}}/>
                        </Link>

                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton>
                    <Link href="/home/done" onClick={()=>toggleDrawer(false)} style={{textDecoration:"none",display:"flex"}}>
                    <ListItemIcon>
                    <CheckSharpIcon color="success" />
                            </ListItemIcon>
                            <ListItemText primary="DONE" sx={{color:"text.primary"}}/>
                        </Link>

                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton>
                    <Link href="/home/pending" onClick={()=>toggleDrawer(false)} style={{textDecoration:"none",display:"flex"}}>
                    <ListItemIcon>
                            <PriorityHighIcon color="warning" />
                            </ListItemIcon>
                        <ListItemText primary="PENDING" sx={{color:"text.primary"}}/>
                        </Link>
                    </ListItemButton>

                </ListItem>
            </List>
</Drawer>
</>
    )
}