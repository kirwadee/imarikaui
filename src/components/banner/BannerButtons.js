import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Button, useMediaQuery } from '@mui/material'
import { Help, ManageSearch } from '@mui/icons-material'
import { Colors } from '../../styles/theme'


const BannerButtons = () => {
    const theme = useTheme()
    const isAboveMd = useMediaQuery(theme.breakpoints.up('md'))
  return (    
    <React.Fragment>
        <Box 
          display='flex'
          flexDirection={{xs:'column', sm:'row'}}
          alignItems ={{xs:'stretched', sm:'flex-start'}}
          justifyContent='center'
          marginTop={2}
        >
            <Button
              component='a'
              variant='contained'
              color='primary'
              size='large'
              href='#about'
              endIcon={<Help />}
              fullWidth ={isAboveMd ? false : true}
              disableElevation={true}
              sx={{
                padding:'15px 20px',
                marginRight:'15px',
                fontSize:'14px',
                textTransform:'uppercase',
                border:'2px solid' + Colors.primary,
                '&:hover':{
                    backgroundColor:'transparent',
                    color:Colors.primary,
                    border:'2px solid' + Colors.primary
                }
              }}
            >
                LEARN HOW
            </Button>
            <Box
               marginTop={{xs:2, sm:0}}
               marginLeft={{sm:1}}
               width={{xs:'100%', md:'auto'}}
            >
                <Button
                  component='a'
                  variant='outlined'
                  color='primary'
                  size='large'
                  href='#projects'
                  endIcon={<ManageSearch />}
                  fullWidth ={isAboveMd ? false : true}
                  disableElevation={true}
                  sx={{
                    padding:'15px 30px',
                    marginRight:'15px',
                    fontSize:'16px',
                    textTransform:'uppercase',
                    border:'2px solid' + Colors.primary,
                    '&:hover':{
                        backgroundColor:'transparent',
                        color:Colors.primary,
                        border:'2px solid' + Colors.primary
                    }
                  }}
                >
                    Our Work
                </Button>
            </Box>
        </Box>
    </React.Fragment>
  )
}

export default BannerButtons