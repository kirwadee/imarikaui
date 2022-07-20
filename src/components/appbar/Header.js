import React from 'react'
import { AppBar, Avatar, Box, Button, Divider, IconButton, Link, Modal, Toolbar, Typography } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'
import  MenuIcon  from '@mui/icons-material/Menu';
import "@fontsource/montez"
import CustomButton from './CustomButton';
import EmailIcon from '@mui/icons-material/EmailOutlined';
  import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import { Colors } from '../../styles/theme';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%', 
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const Header = ({onSidebarOpen}) => {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    

  return (
    <React.Fragment>
        <AppBar
         position='sticky'
         color='transparent'
         sx={{
            top:0,
            border:0,
            backgroundColor:theme.palette.background.default
         }}
        >
            <Toolbar sx={{minHeight:100}}>
                <Box 
                  alignItems='center'
                  sx={{mr:12,display:{md: 'block', lg:'none'}}}
                >
                    <Button
                      onClick={onSidebarOpen}
                      aria-label='Menu'
                      variant='outlined'
                      sx={{
                        borderRadius:2,
                        minWidth:'auto',
                        padding:1,
                        color:Colors.primary,
                        borderColor:alpha(Colors.primary, 0.2)
                      }}
                    >
                        <MenuIcon fontSize='medium' />
                    </Button>
                </Box>
                <Link href='/' style={{textDecoration:'none'}}>
                    <IconButton size="large" disabled>
                        <Avatar
                          variant='rounded'
                          sx={{
                            backgroundColor:Colors.primary,
                            height:100,
                            width:100,
                            marginRight:'15px',
                
                          }}
                        >
                            <img src="/images/banner/IMG-20220628-WA0025.jpg" style={{height:100, width:100}}/>
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
                            display:{md:'flex', xs:'none'},
                      
                          }}
                        >
                            Imarika Peace &amp; Mediation Initiative
                        </Typography>
                    </IconButton>
                </Link>

                <Box sx={{flexGrow:1}} />

                    <Box 
                      sx={{
                        alignItems:"center",
                        display:{lg:'flex', md:'none', xs:'none'}
                      }}
                    >
                        <CustomButton
                           href='#'
                           icon={<HomeIcon />}
                           text='Home' 
                        />
                          <CustomButton
                           href='#about'
                           icon={<InfoIcon />}
                           text='About' 
                        />
                          <CustomButton
                           href='#projects'
                           icon={<ListIcon />}
                           text='Projects' 
                        />
                          <CustomButton
                           href='#gallery'
                           icon={<CollectionsIcon />}
                           text='Gallery' 
                        />
                          <CustomButton
                           href='#contact'
                           icon={<EmailIcon />}
                           text='Contact' 
                        />
                      
                    </Box>
                    <Divider
                      orientation='vertical'
                      sx={{
                        height:32,
                        mx:2,
                        display:{lg:'flex', md:'none', xs:'none'}
                      }}
                     />
                     <Box sx={{display:{lg:'flex', md:'none', xs:'none'}}}>
                        <Button
                          variant='outlined'
                          fontWeight='bold'
                          onClick={handleOpen}
                        >
                            DONATE
                        </Button>

                        <Modal
                          open={open}
                          onClose={handleClose}
                          >
                         <Box sx={style}>
                          <Box
                           sx={{
                            position:"absolute",
                            top:0,
                            right:0
                           }}
                          >
                            <Close onClick={handleClose} />
                          </Box>
                          <Box display={'flex'} justifyContent='center' >
                           <Typography align='center' variant="h6" component="h2" marginRight={2}>
                           PAYBILL NUMBER
                          </Typography>
                          <Typography variant='h6' component={'h2'} fontWeight='bold' >
                           522522
                          </Typography>
                          </Box>
                          <Box display={'flex'} justifyContent='center' >
                           <Typography align='center' variant="h6" component="h2" marginRight={2}>
                           Vooma TILL NUMBER
                          </Typography>
                          <Typography variant='h6' component={'h2'} fontWeight='bold' >
                           5892180
                          </Typography>
                          </Box>
                          <Box display={'flex'} justifyContent='center' >
                          <Typography align='center' variant="h6" component="h2" marginRight={2}>
                          BANK ACCOUNT NUMBER(KCB)
                          </Typography>
                          <Typography variant='h6' component={'h2'} fontWeight='bold' >
                           1296526690
                          </Typography>
                          </Box>
                          <Typography align='center' marginTop={3} sx={{color:'green'}} >
                            Your gift today can provide lifesaving relief
                            </Typography>
                        </Box>
                       </Modal>
                        
                     </Box>
                
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header