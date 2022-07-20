import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({theme})=>({
    display:"flex",
    position:"relative",
    justifyContent:"center",
    alignItems:"center",
    background:Colors.light_gray,
    height:"100vh",
    width:"100%",
    padding:'0px 0px',
    [theme.breakpoints.down('sm')]:{
        flexDirection:"column",
        alignItems:"center", 
        height:'max-content'
    }
}));

export const BannerImage = styled("img")(({src, theme})=>({
    src:`url(${src})`,
    width:"100%",
    height:"100%",
    objectFit:"cover",
    [theme.breakpoints.down("md")]:{
        width:'350px'
    },
    [theme.breakpoints.down("sm")]:{
        width:"320px",
        height:"300px"
    }
}))

export const BannerContent = styled(Box)(()=>({
    display:"flex",
    position:"absolute",
    left:0,
    right:0,
    bottom:0,
    margin:"auto",
    flexDirection:"column",
    justifyContent:"center",
    maxWidth:400,
    padding:'40px',
}));

export const BannerTitle = styled(Typography)(({theme})=>({
    lineHeight:1.1,
    fontSize:'50px',
    marginBottom:'20px',
    [theme.breakpoints.down('md')]:{
        fontSize:'30px'
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:'42px'
    },
    align:"center",
    fontWeight:700
}));

export const BannerDescription = styled(Typography)(({theme})=>({
    lineHeight:1.1,
    letterSpacing:1.1,
    marginBottom:"4rem",
    [theme.breakpoints.down('md')]:{
        lineHeight:1.1,
        letterSpacing:1.1,
        marginBottom:"2.5rem"
    },
    color:Colors.primary,
    fontWeight:1000
}))