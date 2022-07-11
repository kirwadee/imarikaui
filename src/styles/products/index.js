import { Box, Button, IconButton, styled } from "@mui/material";
import { Colors } from "../theme";

export const ProductContainer = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    alignItems:"center", 
    flexDirection:"column",
    [theme.breakpoints.up('md')]:{
        position:'relative'
    }
}));

export const ProductImage = styled(Box)(({theme, src}) => ({
    src:`url(${src})`,
    width:"100%",
    background:Colors.light_gray,
    padding:"100px",
    [theme.breakpoints.down('md')]:{
        width:'80%',
        padding:'24px'
    }
}))

export const ProductActionButton = styled(IconButton)(()=>({
    background:Colors.white,
    margin:4
}))

export const ProductFavButton = styled(ProductActionButton)(({isfav, theme}) => ({
    color:isfav ? Colors.primary : Colors.light,
    [theme.breakpoints.up('md')]:{
        position:'absolute',
        right:0,
        top:0
    }
}))

export const ProductAddToCart = styled(Button)(({show, theme}) =>({
    width:'120px',
    fontSize:'12px',
    [theme.breakpoints.up('md')]:{
        position:'absolute',
        bottom:'2%',
        width:'300px',
        padding:'10px 5px',
        '& hover':{
            opacity:1
        }
    },
    background:Colors.secondary,
    opacity:0.9
}))

export const  ProductMetaWrapper = styled(Box)(() => ({
    padding:4,
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
}))

export const ProductActionsWrapper = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('md')]:{
        '& hover' : {
            opacity:1,
            position:'absolute',
            right:0,
            top:'20%'
        }
    }
}))