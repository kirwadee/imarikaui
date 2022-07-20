import React from 'react'
import { Avatar, Box, Button, Drawer, IconButton, Link, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import CustomButton from './CustomButton';
import DevicesIcon from '@mui/icons-material/Devices';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import ListIcon from '@mui/icons-material/FormatListBulleted';



const style = {
  position: 'absolute',
  bottom: '50%', 
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 2000,
  border: '2px solid #000',
  boxShadow: 24,
  backgroundColor:'pink',
  p: 4,
};

const Sidebar = ({open, onClose}) => {

  

    const theme = useTheme()

  

  return (
   <React.Fragment>
    <Drawer
      anchor='left'
      onClose={onClose}
      open={open}
      variant='temporary'
    >
        <Box sx={{height:'100%', padding:1, position:'relative'}}>
            <Box width={1} paddingX={2} paddingY={1}>
                <Link href='/' style={{textDecoration:'none'}}>
                    <IconButton size="large" disabled>
                        <Avatar
                          variant='rounded'
                          sx={{
                            backgroundColor:theme.palette.primary.main,
                            height:100,
                            width:100,
                            marginRight:'15px'
                          }}
                        >
                            <img alt="" src="/images/banner/IMG-20220628-WA0025.jpg" style={{height:"100px", width:"100px"}}/>
                        </Avatar>
                        <Typography 
                          variant='h4'
                          component='div'
                          sx={{
                            flexGrow:1,
                            color:theme.palette.text.primary,
                            fontFamily:'"Montez", "cursive"',
                            fontWeight:'bold',
                            textDecoration:'none',
                            paddingX:"6px"
                          }}
                        >
                           Imarika Peace &amp; Mediation Initiative 
                        </Typography>
                    </IconButton>
                </Link>
            </Box>
            <Box paddingX={2} paddingY={2} onClick={() => onClose()} >
                <CustomButton 
                    href='#home'
                    icon={<HomeIcon />}
                    text='Home'
                    
                  
                />
                 <Box paddingY={1}  onClick={() => onClose()}>
                    <CustomButton 
                       href='#about'
                       icon={<InfoIcon />}
                       text='About'
                      
                     />
                 </Box>
                 <Box paddingY={1} onClick={() => onClose()} >
                    <CustomButton 
                       href='#projects'
                       icon={<ListIcon />}
                       text='Projects' 
                  
                     />
                 </Box>
                 <Box paddingY={1} onClick={() => onClose()} >
                    <CustomButton 
                       href='#gallery'
                       icon={<DevicesIcon />}
                       text='Gallery'
                       onClick={onClose}
                     />
                 </Box>
                 <Box paddingY={1} onClick={() => onClose()}>
                    <CustomButton 
                     href='#contact'
                     icon={<EmailIcon />}
                     text='Contact'
                     onClick={onClose}
                     />
                 </Box>
                 <Box>
                  <Button
                  variant="contained"
                   sx={{color:'black'}}
                  >
                    DONATE Through
                  </Button>
                      </Box>
                         <Box sx={{style}}>
                          <Box
                           sx={{
                            position:"absolute",
                            bottom:0,
                            left:0
                           }}
                          >
                            
                          </Box>
                          <Box display={'flex'} flexDirection='column' justifyContent='space-between' >
                           <Typography sx={{fontSize:"14px"}}>
                           PAYBILL NUMBER:
                          </Typography>
                          <Typography sx={{fontSize:"19px", color:"black"}} fontWeight='bold' >
                           522522
                          </Typography>
                          </Box>
                          <Box display={'flex'} flexDirection='column' justifyContent='space-between'  >
                           <Typography  sx={{fontSize:"14px"}}>
                           VOOMA TILL NUMBER
                          </Typography>
                          <Typography sx={{fontSize:"19px", color:"black"}} fontWeight='bold'>
                           5892180
                          </Typography>
                          </Box>
                          <Box display={'flex'} flexDirection='column' justifyContent='space-between' >
                          <Typography sx={{fontSize:"14px"}}>
                           BANK ACCOUNT NUMBER(KCB)
                          </Typography>
                          <Typography sx={{fontSize:"19px", color:"black"}} fontWeight='bold' >
                           1296526690
                          </Typography>
                          </Box>
                          <Typography marginTop={3} sx={{color:'black'}} fontSize='18px' align='center' >
                            Your gift today can provide Lifesaving Relief
                          </Typography>
                        </Box>  
                     </Box>
    
        </Box>
    </Drawer>
   </React.Fragment>
  )
}

export default Sidebar