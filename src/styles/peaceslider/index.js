import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const PeaceSliderContainer = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"20px 0px 20px 0px",
    overflow:"hidden",
    background:Colors.secondary,
    [theme.breakpoints.up('md')]:{
        padding:"25px 0px 25px 0px"
    }
}))

export const MessageText = styled(Typography)(({theme})=>({
    fontFamily:'"Montez", "cursive"',
    [theme.breakpoints.up('md')]:{
        fontSize:"3rem",
    },
    color:Colors.white,
    fontSize:"1.5rem"
}))