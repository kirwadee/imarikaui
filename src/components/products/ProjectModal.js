import { FitScreen } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ProjectModal = ({product}) => {
  const theme = useTheme()

  // const tags = ["#peace", "#prosperity", "#marigat"]

  return (
    <React.Fragment>
      <Grid item 
            xs={12}
            md={4}
            data-aos='fade-up'
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={600}
          > 
          <Box
            display={'block'}
            width={1}
            height={1}
            sx={{
              transition:'all .2s ease-in-out',
              '&:hover':{
                transform:`translateY(-${theme.spacing(1/2)})`
              }
            }}
           >
            <Box
              component={Card}
              width={1}
              height={1}
              display='flex'
              flexDirection={'column'}
              sx={{backgroundImage:'none'}}
            >
              <CardMedia
               title={product?.title}
               sx={{
                position: 'relative',
                height: { xs: 240, sm: 340, md: 280 },
                overflow: 'hidden',
                '& .slick-slide img': {
                    objectFit: 'cover',
                },
                '& .slick-prev, & .slick-next': {
                    zIndex: 2,
                    top: 0,
                    bottom: '100%',
                    left: '100%',
                    right: 0,
                    transform: 'translate(-100%, 50%)',
                    marginLeft: theme.spacing(-2),
                    width: 32,
                    height: 32,
                    '&:before': {
                        fontSize: theme.spacing(3),
                    },
                },
                '& .slick-prev': {
                    marginLeft: theme.spacing(-6),
                },
                '& .lazy-load-image-background.lazy-load-image-loaded': {
                    display: 'flex !important',
                },
            }}
              >
                <Box
                  component={LazyLoadImage}
                  effect='blur'
                  src={product?.image}
                  height={{xs:240, sm:340, md:380}}
                  width="100%"
                  sx={{objectFit:'cover'}}
                 />
              </CardMedia>
              <CardContent>
                <Typography
                 variant='h6'
                 gutterBottom
                 align='left'
                 fontWeight={700}
                >
                  {product?.title}
                </Typography>
                <Typography
                  variant='subtitle'
                  align='left'
                  color={theme.palette.text.secondary}
                >
                 {product?.description}
                </Typography>
                <Box
                 marginTop={2}
                 display="flex"
                 justifyContent={"space-between"}
                >
                  <Box marginTop={2}>

                    <Chip 
                       key={Date}
                       label={new Date(product.createdAt).toDateString()} 
                        variant='outlined'
                        sx={{ m: 1}}
                     />
                  
                  </Box> 
                </Box>
              </CardContent>
              <Box flexGrow={1} />
              
             </Box>
          </Box>
          </Grid>

    </React.Fragment>
  )
}

export default ProjectModal