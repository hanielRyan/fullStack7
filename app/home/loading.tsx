import { Box, Container,Skeleton } from "@mui/material"
export default function loading(){
    return(
        <Box sx={{ml:{md:"240px"},height:"90vh",padding:"10px",mt:"80px"}}>
<Container sx={{display:"flex",flexDirection:"column"}}>
{Array(9).fill("").map((arr,index) => <Skeleton animation="wave" key={index} sx={{height:"80px"}}/>)}
</Container>
</Box>
    )
}