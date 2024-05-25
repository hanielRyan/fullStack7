import { AppBar, Toolbar, Typography,Box } from "@mui/material";
import {Dancing_Script} from "next/font/google";
import Profile from "./Profile";
import dynamic from "next/dynamic";
import Hamburger from "./Hamburger";
const dancingScript = Dancing_Script({subsets:["latin"]});
const MotionDiv = dynamic(() => import("./MotionDiv"), { ssr: true });
export default function Nav({data}:{data:any}){
    return(
        <AppBar position="fixed">
            <Toolbar sx={{padding:"10px",width:{md:"calc(100% - 240px)"},ml:{md:"240px"}}}>
                <Box sx={{flexGrow:1,display:"flex"}}>

                    <Hamburger/>

                    <Typography variant="h6" sx={{fontSize:"30px"}} className={dancingScript.className}>
                    <MotionDiv initial={{x:-30,opacity:0}} animate={{x:0,opacity:1}} transition={{ease:"linear"}}>
                        Task Manager
                    </MotionDiv>
                    </Typography>
                    </Box>
                <Profile data={data}/>
            </Toolbar>
        </AppBar>
    )
}