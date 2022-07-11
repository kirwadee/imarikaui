import React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { Colors } from '../../styles/theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button, List, ListItemText, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { WhatsApp, YouTube } from '@mui/icons-material';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const FooterTitle = styled(Typography)(()=>({
    textTransform:"uppercase",
    marginBottom:"1em"
}))

const SubscribeTf = styled(TextField)(({theme}) => ({
    '.MuiInputLabel-root':{
        color:theme.palette.secondary.main,
    },
    'MuiInput-root::before':{
        borderBottom:`1px solid ${theme.palette.secondary.main}`
    }
}))

const Footer = () => {
    const theme = useTheme();

  

    return (
        <div id='contact'>
       <Box
         sx={{
            background:Colors.shaft,
            color:Colors.white,
            padding:{xs:4, md:10},
            pb:2,
            pt:2,
            fontSize:{xs:'12px', md:'14px'}
         }}
       >
        <Grid container spacing={2} justifyContent="space-between" alignItems={'center'}>
            <Grid item md={6} lg={4}>
                <FooterTitle variant='body1'>About Us</FooterTitle>
                <Typography variant='caption2'>
                 This initiative is geared towards supporting children, youth and women affected by banditry,
                 early marriages, FGM and climate change by reaching out and influencing their lives in the 
                 community. We felt that the society needs an organization that will focus on issues related to
                  livelihood and hence we decided to form this organization. The event will also be geared towards supporting the community.
                </Typography>
            </Grid>

            <Grid item md={2}>
                <FooterTitle variant='body1'>
                    quick Links
                </FooterTitle>
                <List
                 sx={{
                    display:"flex",
                    justifyContent:"center",
                    flexDirection:'column'
                 }}
                >
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2"
                         component='a' href='#about'
                         sx={{color:'inherit', textDecoration:'none'}}
                        >
                            About Us 
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography lineHeight={2} variant="caption2"
                         component='a' href='#projects'
                         sx={{color:'inherit', textDecoration:'none'}}
                        >
                            Recent Works
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography lineHeight={2} variant="caption2"
                         component='a' href='#gallery'
                         sx={{color:'inherit', textDecoration:'none'}}
                        >
                            Gallery
                        </Typography>
                    </ListItemText>
                    
                </List>
            </Grid>
            <Grid item  md={4} lg={4}>
                <FooterTitle>Contact Us</FooterTitle>
                     <Box 
                      display={'flex'}
                      marginBottom={2}
                     >
                        <EmailIcon />
                        <Typography marginLeft={2}>
                         imarikapeace@gmail.com
                     </Typography>
                     </Box>
                     
                     <Box 
                      display={'flex'}
                      marginBottom={2}
                     >
                        <WhatsApp />
                        <Typography marginLeft={2}>
                        (+254) 714 484 013
                     </Typography>
                     </Box>
                     <Box 
                      display={'flex'}
                      marginBottom={2}
                     >
                        <YouTube />
                        <Typography marginLeft={2}>
                        Imarikapeace
                     </Typography>
                     </Box>
                     <Box 
                      display={'flex'}
                      marginBottom={2}
                     >
                        <MyLocationIcon />
                        <Typography marginLeft={2}>
                        P.O.BOX 72 - 30400, MARIGAT - KENYA 
                     </Typography>
                     </Box>
                     
                
            </Grid>
        
        </Grid>
       </Box>
       </div>
    );
};

export default Footer;