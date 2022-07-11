import React, { useEffect } from 'react'
import {useTheme} from '@mui/material/styles'
import { Alert, Box, CircularProgress, Grid, Typography, useMediaQuery } from '@mui/material'
import SingleProduct from './SingleProduct'
import { useSelector, useDispatch } from 'react-redux';
import { getProjects, reset } from '../../features/projects/projectSlice';
import Gallery from '../locationimages/Gallery';

const Products = () => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))




   const dispatch= useDispatch()
   
  
   const {projects, isLoading, isError, message} = useSelector((state) => state?.projects)
 


    //When the component mounts dispatch all projects to the redux store
    useEffect(()=>{
   
   dispatch(getProjects())

  
    
  },[dispatch])



  return (
    <div id='projects'>
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
            Recent Projects
          </Typography>
          <Typography 
            variant='h6'
            color={theme.palette.text.secondary}
            align='center'
            data-aos ='fade-up'
            marginTop={4}
            marginBottom={6}
           >
            View some of our latest projects
          </Typography>
        </Box>
        <Grid container spacing={4}
          sx={{display:"flex", justifyContent:"center", alignItems:"center"}}
        >

          { 
            isLoading ? <CircularProgress /> :
             isError ? <Alert severity='error'>{message} </Alert> : projects.length < 0 ? 
             <Alert severity='warning'>No project found!</Alert> :
             projects.slice(0,8).map(product => (
            <SingleProduct key={product._id} product={product} matches={matches} />
          ))}
          
        </Grid>
      </Box>
      <Gallery projects={projects} />
    </div>
  )
}

export default Products