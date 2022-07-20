import React from 'react'
import { Avatar, Box, Drawer, IconButton, Link, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import CustomButton from './CustomButton';
import DevicesIcon from '@mui/icons-material/Devices';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import ListIcon from '@mui/icons-material/FormatListBulleted';



const Sidebar = () => {

    const theme = useTheme()

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleCloseDrawer = () => {
      setMobileOpen(false);
    };

    const openDrawer = () => {
      setMobileOpen(true)
    }

  return (
   <React.Fragment>
    <Drawer
      anchor='left'
      onClose={handleCloseDrawer}
      open={mobileOpen}
      variant='temporary'
    >
        <Box sx={{height:'100%', padding:1}}>
            <Box width={1} paddingX={2} paddingY={1}>
                <Link href='/' style={{textDecoration:'none'}}>
                    <IconButton size="large" disabled>
                        <Avatar
                          variant='rounded'
                          sx={{
                            backgroundColor:theme.palette.primary.main,
                            height:52,
                            width:52,
                            marginRight:'15px'
                          }}
                        >
                            <img src="/images/banner/IMG-20220628-WA0019.jpg" style={{height:30, width:30}}/>
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
                          }}
                        >
                           Imarika Peace &amp; Mediation Initiative 
                        </Typography>
                    </IconButton>
                </Link>
            </Box>
            <Box paddingX={2} paddingY={2} >
                <CustomButton 
                    href='#home'
                    icon={<HomeIcon />}
                    text='Home'
                    onClick={handleCloseDrawer}
                  
                />
                 <Box paddingY={1} >
                    <CustomButton 
                       href='#about'
                       icon={<InfoIcon />}
                       text='About'
                       onClick={handleCloseDrawer}
                     />
                 </Box>
                 <Box paddingY={1} >
                    <CustomButton 
                       href='#projects'
                       icon={<ListIcon />}
                       text='Projects' 
                       onClick={handleCloseDrawer}
                     />
                 </Box>
                 <Box paddingY={1} >
                    <CustomButton 
                       href='#gallery'
                       icon={<DevicesIcon />}
                       text='Gallery'
                       onClick={handleCloseDrawer}
                     />
                 </Box>
                 <Box paddingY={1} >
                    <CustomButton 
                     href='#contact'
                     icon={<EmailIcon />}
                     text='Contact'
                     onClick={handleCloseDrawer}
                     />
                 </Box>
            </Box>
            
            
        </Box>
    </Drawer>
   </React.Fragment>
  )
}

export default Sidebar