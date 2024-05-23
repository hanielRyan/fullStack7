"use client";
import { PaletteMode, ThemeProvider,createTheme } from "@mui/material";
import { useSelector } from "react-redux";
export default function MuiProvider({children}:{children:React.ReactNode}){
    const mode = useSelector((state:{mode:{theme:PaletteMode}})=>{return state.mode.theme });
    const theme = createTheme({
        palette:{
            mode:mode,
            text:{
            ...(mode === "light" ? {primary:"#000000"} : {primary:"#FFFFFF"})
            },
background:{
    ...(mode === "light" ? {default:"#FFFFFF"} : {default:"#3B3B3B"})
}
        }
    })
    return(
        <>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
        </>
    )

}