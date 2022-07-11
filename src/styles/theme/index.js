
import { createTheme } from "@mui/material/styles";
import typography from "./typography";

export const Colors = {
    primary:"#344e41",
    secondary:"#3a5a40",
    success:"#588157",
    info:"#a3b18a",
    danger:"#FF5722",
    warning:"#FFC107",
    dark:"#0e1b20",
    light:"#aaa",
    muted:"#abafb3",
    border:"#DDDFE1",
    inverse:"#2F3D4A",
    shaft:"#333",
    ///////////////
    //Grays
    /////////////
    dim_grey:"#696969",
    dove_gray:"#d5d5d5",
    body_bg:"#f3f6f9",
    light_gray:"rgb(230,230,230)",
    //////////////
    //solid color
    ////////////
    white:"#fff",
    black:"#000"
};

const theme = createTheme({
    palette:{
        mode: 'light',
            background: {
                paper: 'rgb(255, 255, 255)',
                default: 'rgb(255, 255, 255)',
            },
        primary:{
            main:Colors.primary
        },
        secondary:{
            main:Colors.secondary
        },
        text: {
            primary: '#283618',
            secondary: '#606c38',
        },
        typography: typography,
    },

    components:{
        MuiButton:{
            defaultProps:{
                disableRipple:true,
                disableElevation:true
            }
        },
        MuiDrawer:{
            styleOverrides:{
                paper:{
                    width:280,
                    background:Colors.light,
                    color:Colors.white,
                    borderRadius:'0px 100px 0px 0px',
                    borderRight:`1px solid ${Colors.secondary}`
                }
            }
        },
        MuiDivider:{
            styleOverrides:{
                root:{
                    
                }
            }
        }
    }
})

export default theme;