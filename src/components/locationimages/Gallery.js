import React from 'react'
import {useTheme} from '@mui/material/styles'
import {  Box, Grid, Typography, useMediaQuery } from '@mui/material'
import CarouselCard from './CarouselCard';

const Gallery = ({projects}) => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))



  return (
    <div id='gallery'>
      <Box
        maxWidth={{sm:720, md:1236}}
        margin='0 auto'
        paddingX={2}
        paddingY={{xs:4, sm:6, md:8}}
      >
        <Box marginBottom={4}>
          <Typography
           variant='h3'
           align='center'
           fontWeight={700}
           marginTop={theme.spacing(1)}
           data-aos='fade-up'
           gutterBottom
          >
             Our Gallery
          </Typography>
          <Typography 
            variant='h6'
            color={theme.palette.text.secondary}
            align='center'
            data-aos ='fade-up'
            marginTop={4}
            marginBottom={6}
           >
              Events in pictures
          </Typography>
        </Box>
        <Grid container spacing={4}
         sx={{display:"flex", justifyContent:"center", alignItems:"center"}}
        >

          { 
             projects.map(product => (
            <CarouselCard key={product._id} product={product} matches={matches} />
          ))}
          
        </Grid>
      </Box>
    </div>
  )
}

export default Gallery