import {Drawer,List,ListItem,ListItemIcon,ListItemButton,ListItemText,Divider,Toolbar, Typography} from "@mui/material";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import { MotionDiv } from "./MotionDiv";
export default function SideBar(){
    return(
        <>
        <Drawer variant="permanent" sx={{display:{xs:"none",md:"block"},'& .MuiDrawer-paper':{width:"240px"}}}>
        <MotionDiv initial={{opacity:0,scaleX:0}} animate={{opacity:1,scaleX:1}} transition={{ease:"linear",delay:0.1}} style={{transformOrigin:"left"}}>
        <Toolbar sx={{padding:"23px",display:"grid",placeItems:"center"}}>
                <Typography variant="h6" sx={{fontWeight:"bold"}}>Status</Typography>
            </Toolbar>
            <Divider/>
            <List>
                <ListItem>
                    <ListItemButton>
                    <Link href="/home" style={{textDecoration:"none",display:"flex"}}>
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
                    <Link href="/home/done" style={{textDecoration:"none",display:"flex"}}>
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
                    <Link href="/home/pending" style={{textDecoration:"none",display:"flex"}}>
                    <ListItemIcon>
                            <PriorityHighIcon color="warning" />
                            </ListItemIcon>
                        <ListItemText primary="PENDING" sx={{color:"text.primary"}}/>
                        </Link>
                    </ListItemButton>

                </ListItem>
            </List>
            </MotionDiv>
        </Drawer>
        </>
    )
}